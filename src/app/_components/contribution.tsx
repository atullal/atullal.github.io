'use client'
import GitHubCalendar from 'react-github-calendar';
  
const Contribution = () => {
  const selectLastHalfYear = (contributions:any) => {
    const currentDate = new Date();
    const sixMonthsAgo = new Date(currentDate.setMonth(currentDate.getMonth() - 10));
  
    return contributions.filter((activity:any) => {
      const activityDate = new Date(activity.date);
      return (
        (activityDate > sixMonthsAgo && activityDate <= new Date()) // Ensure the date is within the last six months
      );
    });
  };
  
    return (
        <div className="flex items-center">
        <GitHubCalendar username="atullal"
  transformData={selectLastHalfYear} 
  hideColorLegend
  labels={{
    totalCount: '{{count}} contributions in the last ten months',
  }}/>
        </div>
    );
};

export default Contribution;
  