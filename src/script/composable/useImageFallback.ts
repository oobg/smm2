const useImageFallback = (alternativeSrc: string, retryDelay: number) => {
  const handleImageError = (event: Event) => {
    const target = event.target as HTMLImageElement;
    target.src = alternativeSrc;
    setTimeout(() => {
      target.src = target.src;
    }, retryDelay);
  };

  return {
    handleImageError,
  };
}

export default useImageFallback;
