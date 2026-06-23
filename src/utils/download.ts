export const getAppLink = (): string => {
  return (import.meta.env.VITE_PLAY_STORE_URL as string) || "";
};

export const handleDownload = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
  const link = getAppLink();
  if (!link || link.trim() === "") {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-coming-soon'));
  }
};
