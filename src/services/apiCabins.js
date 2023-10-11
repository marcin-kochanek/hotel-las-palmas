import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  let { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded.');
  }

  return data;
}

export async function createOrUpdateCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );
  const image = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = await supabase.from('cabins');

  const { data, error } = !id
    ? // create cabin
      await query.insert([{ ...newCabin, image }]).select()
    : // update cabin
      await query
        .update([{ ...newCabin, image }])
        .eq('id', id)
        .select();

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be created.');
  }

  // upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);

    console.error(storageError);
    throw new Error(
      'Cabin image could not be uploaded. The cabin was not created. '
    );
  }

  return data;
}

export async function deleteCabin(id) {
  let { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be deleted.');
  }

  return data;
}
