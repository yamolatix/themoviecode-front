import toast from 'react-hot-toast'
import axios from "axios";
import { useState } from 'react';

const useFavorite = (user, movie) => {

  const [favorito, setFavorito] = useState(false)

  const agregarFavoritos = () => {
    if (!user) throw toast.error('You need to be logged in');
    axios.post(`https://themoviecode-back.onrender.com/api/user/${user}/favorite/add`, {
      tmdbId: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      description: movie.overview,
      release_date: movie.release_date,
    }, { withCredentials: true, credentials: 'include' })
      .then(() => "Se agrego tu favorito")
      .catch((error) => console.log(error))
    setFavorito(true)
    toast.success('Added to Favorites!')
  };


  const eliminarFavoritos = () => {
    if (!user) throw toast.error('You need to be logged in');
    axios.delete(
      `https://themoviecode-back.onrender.com/api/user/${user}/${movie.id}/remove`, { withCredentials: true, credentials: 'include' })
      .then(() => "Eliminado de favoritos")
      .catch(error => console.log(error))
    setFavorito(false)

    toast.success('Removed to Favorites!')
  };

  return { agregarFavoritos, eliminarFavoritos, favorito }

}
export default useFavorite;