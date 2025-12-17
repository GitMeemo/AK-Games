const About=()=>{
    return(
    <>
    <header className="bg-dark text-white p-2 list-unstyled p-0 text-center">
          <h1 >ABOUT US</h1>
        </header>

        <main>
      <div className="container text-white">
        <p>Welcome to our gaming site! We're a team of passionate gamers who love to share our knowledge and experience with others.</p>

        <h2>Our Mission</h2>
        <p>Our mission is to create a community where gamers of all levels can come together to learn, share, and have fun.</p>

        <h2>Our Team</h2>
        <p>We're a small but dedicated team of gamers who are always looking for new ways to improve the site and make it a better experience for our users. Meet our team:</p>
      </div>

      <ul className="list-unstyled row justify-content-center text-white">
  <li className="col-md-6">
    <div className="team-member">
      <img style={{ height: "auto", width: "300px" }} src="/image files/AK2.png" alt="Ameenullah" />
      <h3>Ameenullah</h3>
      <p>Founder and CEO</p>
      <p>Content Manager</p>
      <p>Web Developer</p>
    </div>
  </li>
</ul>

      {/* <div className="container text-white">
        <h2>Contact Us</h2>
        <p>Have a question or suggestion? I'd love to hear from you! Get in touch with me via email, social media, or my contact form.</p>

        <p>Email: ameenkamangar@gmail.com</p>
        <p>Facebook: <a href="https://facebook.com/gamingsite">@AKGames</a></p>

        <form action="submit.php" method="post">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <input type="submit" value="Send" />
        </form>
      </div> */}
    </main>
    </>
    )
}
export default About;