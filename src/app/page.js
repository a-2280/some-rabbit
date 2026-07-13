import FeaturedProject from "@/components/featuredProject";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="pth">
      <p className="h1 max-400px ma mt-140px mb-180px">Careful web development for design-led projects.</p>
      <FeaturedProject />
      <Projects />
    </div>
  );
}
