const { useState, useRef, useEffect } = React;

function App() {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);

    useEffect(() => {
        // if autoplay allowed, try to play muted
        const v = videoRef.current;
        if (v) {
            v.muted = true; // start muted to allow autoplay on some browsers
            v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        }
    }, []);

    function togglePlay() {
        const v = videoRef.current; if (!v) return;
        if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
    }
    function toggleMute() { const v = videoRef.current; if (!v) return; v.muted = !v.muted; setMuted(v.muted); }

    return (
        <div className="app">
            <header className="header">
                <h1>Goatscaping Co.</h1>
                <div className="tag">Landscape with goats — sustainably fun</div>
            </header>

            <main className="playerWrap">
                <div className="videoContainer">
                    <video ref={videoRef} className="video" src="livestream.mp4" playsInline />

                    <div className="controls">
                        <button onClick={togglePlay}>{playing ? 'Pause' : 'Play'}</button>
                        <button onClick={toggleMute}>{muted ? 'Unmute' : 'Mute'}</button>
                        <button onClick={() => { const v = videoRef.current; if (!v) return; if (v.requestFullscreen) v.requestFullscreen(); }}>{'Fullscreen'}</button>
                    </div>

                    <div className="overlayBrand">
                        <div className="goatIcon">🐐</div>
                        <div>Live Pasture Cam</div>
                    </div>
                </div>
            </main>

            <footer className="footer">© {new Date().getFullYear()} Goatscaping Co.</footer>
        </div>
    );
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);
