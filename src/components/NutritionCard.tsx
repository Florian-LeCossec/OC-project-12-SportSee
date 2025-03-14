import '../styles/components/NutritionCard.scss';

type NutritionCardProps = {
  icon: string;
  value: string | number;
  unit: string;
  label: string;
}

const NutritionCard= ({icon, value, unit, label}: NutritionCardProps ) => {
  return (
    <div className='nutrition-card'>
    	<div className='nutrition-card__icon'>
    		<img src={icon} alt="" width={60} height={60} />
    	</div>
    	<div className='nutrition-card__content'>
    		<div className='nutrition-card__content__value'>
    			{value}{unit}
    		</div>
    		<div className='nutrition-card__content__label'>
    			{label}
    		</div>
    	</div>
    </div>
  );
};

export default NutritionCard; 