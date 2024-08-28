// Placeholder to host a component
import React from 'react';

const Hours = () => {
  // Obtener el día actual de la semana (0 = Domingo, 1 = Lunes, etc.)
  const currentDay = new Date().getDay();
  
  // Definir los horarios de apertura según el día de la semana
  const hours = {
    weekday: "10 a.m. a 4 p.m.",
    weekend: "9 a.m. a 8 p.m."
  };

  // Determinar si es día de semana o fin de semana
  const isWeekend = currentDay === 0 || currentDay === 6;
  const todayHours = isWeekend ? hours.weekend : hours.weekday;

  return (
    <div>
      <h2>Horario de Hoy</h2>
      <p>El refugio está abierto de {todayHours}.</p>
    </div>
  );
};

export default Hours;