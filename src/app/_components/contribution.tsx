import GitHubCalendar from 'react-github-calendar';
  
const Contribution = () => {
    const selectLastHalfYear = (contributions:any) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;
      
        return contributions.filter((activity:any) => {
          const date = new Date(activity.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };
    return (
        <div className="flex items-center">
        <GitHubCalendar username="atullal"
  hideColorLegend
  labels={{
    totalCount: '{{count}} contributions in the last half year',
  }}/>
        </div>
    );
};

export default Contribution;
  