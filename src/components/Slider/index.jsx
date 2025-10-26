import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card';
import { Container } from './styles';

export default function Slider({ info, title, contentType }) {
  const items = Array.isArray(info) ? info : [];

  return (
    <Container>
      <h2>{title}</h2>
      {items.length > 0 ? (
        <Swiper
          grabCursor
          spaceBetween={20}
          slidesPerView={'auto'}
          className="swiper"
          breakpoints={{
            // Mobile - estilo Netflix
            320: {
              spaceBetween: 12,
              slidesPerView: 2.2,
            },
            // Mobile medium
            480: {
              spaceBetween: 16,
              slidesPerView: 2.5,
            },
            // Tablet
            768: {
              spaceBetween: 18,
              slidesPerView: 3.5,
            },
            // Desktop small
            1024: {
              spaceBetween: 20,
              slidesPerView: 4.5,
            },
            // Desktop large
            1200: {
              spaceBetween: 20,
              slidesPerView: 5.5,
            },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <Card item={item} contentType={contentType} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>Carregando...</p>
      )}
    </Container>
  );
}
