export const formatSeconds = (seconds: number): string => {
  if (seconds < 0) {
    return `0:00`;
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};
