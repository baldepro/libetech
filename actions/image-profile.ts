import { list, put } from '@vercel/blob'
import { revalidatePath } from 'next/cache';

export async function uploadImage(formData: FormData) {
    const imageFile = formData.get('image') as File;
    const blob = await put(imageFile.name, imageFile, {
      access: 'public',
    });
    revalidatePath('/');
    return blob;
}

export async function downloadImage() {
    const blobs = await list();
    return blobs.blobs.filter(image => image.pathname === 'profile')[0];
}