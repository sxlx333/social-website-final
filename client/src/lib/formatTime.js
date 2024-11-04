export function formatTime(time) {
    const postDate = new Date(time);
    const now = new Date();
    const diffInSeconds = Math.floor((now - postDate) / 1000);

    if (diffInSeconds < 20) return 'Just now';
    if (diffInSeconds < 60) return `${diffInSeconds} ${diffInSeconds === 1 || diffInSeconds % 10 === 1 ? 'second' : 'seconds'} ago`;

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes} ${diffInMinutes === 1 || diffInMinutes % 10 === 1 ? 'minute' : 'minutes'} ago`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} ${diffInHours === 1 || diffInHours % 10 === 1 ? 'hour' : 'hours'} ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) return `${diffInDays} ${diffInDays === 1 || diffInDays % 10 === 1 ? 'day' : 'days'} ago`;

    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) return `${diffInMonths} ${diffInMonths === 1 || diffInMonths % 10 === 1 ? 'month' : 'months'} ago`;

    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} ${diffInYears === 1 || diffInYears % 10 === 1 ? 'year' : 'years'} ago`;
}
