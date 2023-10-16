import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex items-center max-xl:flex-col-reverse gap-10 max-xl:gap-16 max-container'>
      <div className='flex-1 relative'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam quidem natus in ipsam architecto 
          quam quae est, eveniet eaque odio fugiat qui nemo ducimus inventore molestiae sapiente cupiditate deserunt?
        </p>
        <p className='mt-6 info-text'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde et id molestiae debitis soluta, 
          architecto reprehenderit tempore cumque officia, excepturi culpa cum quae voluptates. Soluta ex 
          molestias in aliquid cupiditate!
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
