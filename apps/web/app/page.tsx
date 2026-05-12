import { Accordion, Container } from '@repo/ui';
import { Cart, Footer, Header, Hero, ProductsList } from '../widgets';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="products" className="min-h-svh scroll-smooth scroll-mt-[72px]">
          <Container className="px-6 py-12 space-y-8">
            <h2 className="text-3xl font-medium">Товары</h2>
            <ProductsList />
          </Container>
        </section>
        <section id="about" className="min-h-svh scroll-smooth scroll-mt-[72px]">
          <Container className="px-6 py-12 space-y-8">
            <h2 className="text-3xl font-medium text-center">О нас</h2>
            <p className="text-lg text-center text-gray-300 w-full">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas eaque molestiae mollitia debitis libero suscipit dolor minus eos, eius totam error explicabo, dolore id impedit accusamus magni expedita sequi. Dignissimos accusantium, hic tempore repellat quas ratione perspiciatis illum iste accusamus eligendi sunt. Modi fugiat asperiores ex veniam dolorum, tempora quo.</p>
            <div className="relative flex w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group gap-12">
              <ul className="flex animate-marquee shrink-0 items-center justify-center gap-12 py-10">
                {Array.from({ length: 5 }, (_v, index) => (
                  <li key={index} className="flex-none px-[clamp(1rem,4vw,3rem)]">
                    Logo {index + 1}
                  </li>
                ))}
              </ul>
              <ul className="flex animate-marquee shrink-0 items-center justify-center gap-12 py-10" aria-hidden="true">
                {Array.from({ length: 5 }, (_v, index) => (
                  <li key={index} className="flex-none px-[clamp(1rem,4vw,3rem)]">
                    Logo {index + 1}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
        <section id="faq" className="min-h-svh scroll-smooth scroll-mt-[72px]">
          <Container className="px-6 py-12 space-y-6 text-gray-300">
            <h2 className="text-3xl font-medium text-center text-white">Вопросы?</h2>
            <p className="text-center">Ответы на самые частые вопросы о LIgma.</p>
            <ul className="w-full divide-y space-y-4">
              {Array.from({ length: 6 }, (_v, index) => (
                <li key={index}>
                  <Accordion title={`Que ${index + 1}?`}>
                    <strong>Answer {index + 1}.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolor dicta magni numquam nobis eius doloribus, inventore similique ut consectetur facere in modi expedita ad consequuntur laboriosam saepe officia perferendis maxime rem architecto commodi! Labore, deleniti. Dignissimos aliquam non vero. Vel alias nemo repellendus numquam ipsa repellat doloremque, veniam architecto.
                  </Accordion>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>
      <Footer />
      <Cart />
    </>
  );
}
