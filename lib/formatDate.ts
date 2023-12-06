// Create a function that takes a date string and returns either:
// - The date's formatted string (e.g. "January 1, 2017 (1y ago)")
// - The date's relative time (e.g. "1 year ago")

export default function formatDate(date: string, type?: 'short' | 'full') {
  let currentDate = new Date();
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return type === 'short' ? formattedDate : `${fullDate} (${formattedDate})`;
}