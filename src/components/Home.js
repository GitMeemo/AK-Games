import React from 'react'

export default function Home() {
  return (
    <>
    <header className='bg-dark text-white p-2 list-unstyled p-0 text-center'>
    <h1>HOME</h1>
    </header>
    
      <div className='m-4 p-5 border text-white border-2 border-dark rounded-lg shadow-sm'>
        <h1>Upcoming Releases</h1>

        <div className="container text-white">
  <div class="row">
    <div class="col-lg-2 col-md-6">
      <section className="game-section">
        <h3>Suicide Squad</h3>
        <a href="https://www.suicidesquadgame.com/en-us" target="_blank" rel="noopener">
          <img  style={{height:"auto" , width:"200px" }} className="img-fluid game-image" src="/image files/SSKTJL.jpg" alt="Featured Game"/>
        </a>
        <p>Action, Adventure, Open World.</p>
      </section>
    </div>


    <div className="col-lg-2 col-md-6">
      <section className="game-section">
        <h3>Street Fighter 6</h3>
        <a href="https://www.streetfighter.com/6/en-us/" target="_blank" rel="noopener">
          <img style={{height:"auto" , width:"200px" }} className="img-fluid game-image " src="/image files/SF.jpg" alt="Featured Game"/>
        </a>
        <p>Action, Fighting.</p>
      </section>
    </div>


    <div className="col-lg-2 col-md-6">
      <section className="game-section">
        <h3>Minecraft </h3>
        <a href="https://www.minecraft.net/en-us/about-legends" target="_blank" rel="noopener">
          <img style={{height:"auto" , width:"200px" }} className="img-fluid game-image " src="/image files/MINECRAFTLegends.jpg" alt="Featured Game"/>
        </a>
        <p>Fantasy, Action, Adventure.</p>
      </section>
    </div>


    <div className="col-lg-2 col-md-6">
      <section className="game-section">
        <h3>RedFall</h3>
        <a href="https://bethesda.net/en/game/redfall" target="_blank" rel="noopener">
          <img style={{height:"auto" , width:"200px" }} className="img-fluid game-image " src="/image files/RedFall.jpg" alt="Featured Game"/>
        </a>
        <p>Action, Horror, Survival.</p>
      </section>
    </div>


    <div className="col-lg-2 col-md-6">
      <section className="game-section">
        <h3>Star Wars</h3>
        <a href="https://www.starwars.com/games-apps/star-wars-jedi-survivor" target="_blank" rel="noopener">
          <img style={{height:"auto" , width:"200px" }} className="img-fluid game-image" src="/image files/Jedi.jpg" alt="Featured Game"/>
        </a>
        <p>Shooting, Action, War.</p>
      </section>
    </div>
  </div>
</div>


      </div>
      <div className='m-4 p-5 text-white border border-2 border-dark rounded-lg shadow-sm'>
      <h1>Featured Games</h1>
      <div className="container">
  <div className="row">
    <div className="col-lg-4 col-md-6">
      <section className="game-section">
        <h2>GTA V</h2>
        <img style={{height:"auto" , width:"200px" }} className="img-fluid game-image" src="/image files/GTA5Poster.jpg" alt="Featured Game"/>
        <p>Action, Adventure, Open World.</p>
        <a href="https://www.rockstargames.com/gta-v" target="_blank" rel="noopener" class="btn btn-primary">More Info.</a>
        <button className="btn btn-danger">Download</button>
      </section>
    </div>


    <div className="col-lg-4 col-md-6">
      <section className="game-section">
        <h2>AC Black Flag</h2>
        <img style={{height:"auto" , width:"200px" }} className="img-fluid game-image" src="/image files/BlackFlag.jpg" alt="Featured Game"/>
        <p>Action, Adventure, History.</p>
        <a href="https://www.ubisoft.com/en-gb/game/assassins-creed/iv-black-flag" target="_blank" rel="noopener" class="btn btn-primary">More Info.</a>
        <button className="btn btn-danger">Download</button>
      </section>
    </div>


    <div class="col-lg-4 col-md-6">
      <section className="game-section">
        <h2>God Of War</h2>
        <img style={{height:"auto" , width:"200px" }} className="img-fluid game-image" src="/image files/GOW.jpg" alt="Featured Game"/>
        <p>Fantasy, Action, Adventure.</p>
        <a href="https://www.playstation.com/en-us/god-of-war/" target="_blank" rel="noopener" class="btn btn-primary">More Info.</a>
        <button className="btn btn-danger">Download</button>
      </section>
    </div>


    <div class="col-lg-4 col-md-6">
      <section className="game-section">
        <h2>The Last Of Us</h2>
        <img style={{height:"auto" , width:"200px" }} className="img-fluid game-image" src="/image files/LOS.webp" alt="Featured Game"/>
        <p>Action, Horror, Survival.</p>
        <a href="https://www.playstation.com/en-us/the-last-of-us/" target="_blank" rel="noopener" class="btn btn-primary">More Info.</a>
        <button className="btn btn-danger">Download</button>
      </section>
    </div>


    <div className="col-lg-4 col-md-6">
      <section className="game-section">
        <h2>COD ModernWarfare</h2>
        <a href="/image files/modernwarfare2.jpeg" target="_blank">
          <img style={{height:"auto" , width:"200px" }} className="img-fluid game-image" src="/image files/modernwarfare2.jpeg" alt="Featured Game"/>
        </a>
        <p>Shooting, Action, War.</p>
        <a href="https://www.callofduty.com/modernwarfare" target="_blank" rel="noopener" class="btn btn-primary">More Info.</a>
        <button className="btn btn-danger">Download</button>
      </section>
    </div>
  </div>
</div>
    </div>
    </>
  )
}