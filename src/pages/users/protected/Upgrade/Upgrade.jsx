import UpgradeCard from './UpgradeCard';

const Upgrade = () => {
   return (
      <div>
         <p className="text-center lead mt-3 mb-5">
            <span>
               विशेष सदस्य बन्नको लागि तल दिइएको कुनै एक प्याकेज छान्नुहोस्। प्याकेज कसरी लिने भन्नेबारेमा सहयोग चाहिएमा
               सम्पर्क गर्नुहोस 9861726027
            </span>
         </p>

         <div className="d-flex gap-3 flex-wrap">
            <UpgradeCard
               title="GOLD"
               duration="180 days"
               profileViews="50 times"
               liveChat="unlimited"
               personalMessage="50 times"
               price="Rs. 5000"
               onClick={() => {}}
            />

            <UpgradeCard
               title="FOREIGN"
               duration="180 days"
               profileViews="50 times"
               liveChat="unlimited"
               personalMessage="50 times"
               price="Rs. 10000"
               onClick={() => {}}
            />

            <UpgradeCard
               title="ECONOMY"
               duration="90 days"
               profileViews="5 times"
               liveChat="unlimited"
               personalMessage="50 times"
               price="Rs. 2500"
               onClick={() => {}}
            />
         </div>
      </div>
   );
};

export default Upgrade;
