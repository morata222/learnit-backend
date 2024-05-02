import cron from 'node-cron';
import UserProgress from '../models/user/user-progress.js'; // Update path to your UserProgress model

// Define the function to reset monthly rankings
export function scheduleMonthlyRankingsReset() {
  // run the function at midnight on the first day of each month
  cron.schedule('0 0 1 * *', async () => {
    console.log('Running monthly rankings reset...');
    try {
      await UserProgress.resetMonthlyRankings();
      console.log('Monthly rankings reset successful.');
    } catch (err) {
      console.error('Error resetting monthly rankings:', err);
    }
  });
}
