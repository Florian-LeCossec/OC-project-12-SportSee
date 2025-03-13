type NutritionCardProps = {
  icon: string;
  value: string | number;
  unit: string;
  label: string;
}

const NutritionCard= ({icon, value, unit, label}: NutritionCardProps ) => {
  return (
    <div 
      style={{ 
        display: 'flex',
        alignItems: 'center',
        padding: '2rem',
        borderRadius: '5px',
        gap: '1.5rem'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '60px',
          height: '60px',
          borderRadius: '6px',
        }}
      >
        <img src={icon} alt="" width={60} height={60} />
      </div>
      <div>
        <div style={{ 
          fontSize: '20px',
          fontWeight: 'bold',
          marginBottom: '5px'
        }}>
          {value}{unit}
        </div>
        <div style={{ 
          color: '#74798C',
          fontSize: '14px'
        }}>
          {label}
        </div>
      </div>
    </div>
  );
};

export default NutritionCard; 