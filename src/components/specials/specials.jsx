import ProductCard from "./product-card";

export default function Specials() {
    return (
        <section id={'specials'}>
            <div>
                <h3>Specials</h3>
                <button>Online Menu</button>
            </div>
            <div>
               <ProductCard image={'/img/5b33e9cd6067eb9aa7ce588a24f8a5d73bf37ee0.jpg'} title={'Pasta'} price={12.99} description={'This is the best italian pasta in Chicago'}/>
               <ProductCard image={'/img/5b33e9cd6067eb9aa7ce588a24f8a5d73bf37ee0.jpg'} title={'Pasta'} price={12.99} description={'This is the best italian pasta in Chicago'}/>
               <ProductCard image={'/img/5b33e9cd6067eb9aa7ce588a24f8a5d73bf37ee0.jpg'} title={'Pasta'} price={12.99} description={'This is the best italian pasta in Chicago'}/>
            </div>
        </section>
    )
}