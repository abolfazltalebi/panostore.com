import ExperiencesCaption from './ExperiencesImage';
import ExperiencesImage from './ExperiencesCaption';

export default function Experiences() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-12 items-center container">
      <ExperiencesCaption/>
      <ExperiencesImage/>
    </section>
  )
}
