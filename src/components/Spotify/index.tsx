import styles from './spotify.module.css';

export default function Spotify() {
  return (
    <div className={styles.spotifyWrapper}>
      <iframe title='Spotify Playlist Bossa e Café' className={styles.spotify} src="https://open.spotify.com/embed/playlist/6unyax6qQyhunvOd2QOAzB?utm_source=generator&theme=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" sandbox="allow-scripts  allow-same-origin" />
      <iframe title='Spotify Playlist Jazz and Cigar' className={styles.spotify} src="https://open.spotify.com/embed/playlist/2mau9BQ3cVx7cyKcrGmoSr?utm_source=generator&theme=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" sandbox="allow-scripts  allow-same-origin" />
    </div>
  );
}