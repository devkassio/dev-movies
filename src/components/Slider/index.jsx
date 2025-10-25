import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card';
import { Container } from './styles';
export default function Slider({ info, title }) {
  const items = Array.isArray(info) ? info : [];

  return (
    <Container>
      <h2>{title}</h2>
      {items.length > 0 ? (
        <Swiper
          grabCursor
          spaceBetween={10}
          slidesPerView={'auto'}
          className="swiper"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>Carregando...</p>
      )}
    </Container>
  );
}
