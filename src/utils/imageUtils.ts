import { removeBackground, loadImage } from '@/lib/backgroundRemoval';

export const removeImageBackground = async (imageUrl: string): Promise<string> => {
  try {
    console.log('Starting background removal for:', imageUrl);
    
    // Fetch the image
    const response = await fetch(imageUrl);
    const imageBlob = await response.blob();
    
    // Load the image
    const img = await loadImage(imageBlob);
    
    // Remove background
    const processedBlob = await removeBackground(img);
    
    // Convert blob to data URL
    return URL.createObjectURL(processedBlob);
  } catch (error) {
    console.error('Error removing background:', error);
    return imageUrl; // Return original image URL if processing fails
  }
};