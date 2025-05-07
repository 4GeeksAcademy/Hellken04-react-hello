import React from "react";
import Card from "./Card";
import NavBar from "./NavBar";
import Foot from "./Foot";


const Home = () => {
	let cards = [
		{
			titulo: "Mi primera Imagen",
			imagen: "https://picsum.photos/500/300?random=1",
			texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet non eligendi dolor consequuntur repudiandae error, laborum asperiores velit obcaecati commodi harum quisquam qui sapiente enim magnam? Eveniet modi harum quia?"
		},
		{
			titulo: "Mi segunda Imagen",
			imagen: "https://picsum.photos/500/300?random=2",
			texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia autem exercitationem illo alias ut mollitia velit harum odio dolore aperiam, debitis voluptate dolorum architecto incidunt nostrum, magni laudantium delectus rem."
		},
		{
			titulo: "Mi tercera Imagen",
			imagen: "https://picsum.photos/500/300?random=3",
			texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quae fuga dicta error totam deserunt velit officia fugit explicabo reprehenderit odio aspernatur, non asperiores tempora nobis similique! Itaque, id molestiae."
		},
		{
			titulo: "Mi cuarta Imagen",
			imagen: "https://picsum.photos/500/300?random=4",
			texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, cumque esse? Pariatur quia eos repudiandae dolores ullam ipsa inventore. Non sint itaque eveniet nemo ex sed ut temporibus. Vitae, quaerat."
		}
	];

	return (
		<div>
			<div>
				<NavBar></NavBar>
			</div>

			<div className="container">
				<div class="jumbotron bg-secondary-subtle p-3 mt-2">
					<h1 class="display-4">A WARM WELCOME!</h1>
					<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
						<p class="lead">
							<a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
						</p>
					
				</div>

				<div className="row mt-2">
					{cards.map((card, index, array) =>
						<div className="col-lg-3 col-md-6 col-xs-12 p-1 text-center">
							<Card titulo={card.titulo} imagen={card.imagen} texto={card.texto}></Card>
						</div>
					)}
				</div>

			</div>

			<div>
				<Foot></Foot>
			</div>
		</div>

	);
};

export default Home;