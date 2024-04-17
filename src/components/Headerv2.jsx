import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="Quiz image" />
      <h1>Ivy's React Quiz</h1>
    </header>
  );
}
