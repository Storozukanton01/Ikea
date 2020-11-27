
import {getLocalStorage,setLocalStorage} from "./storage.js";
// import {userData} from "./userData.js";

const COUNTER = 6;

class App {
    constructor() {
        this._renderApp();
    }

    _renderApp() {
        this._generateHeader();
        this._generateCatalog();
        this._generateFooter();
        this._generateGoodsPage();
        this._generateCartPage();
    }

    _generateHeader() {
        const header = `
  <header>
    <div class="container">
        <div class="header">
            <button class="btn btn-burger" aria-label="открыть меню">
                <svg focusable="false" class="svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M20 8H4V6H20V8ZM20 13H4V11H20V13ZM20 18H4V16H20V18Z"></path>
                </svg>
            </button>
            <a href="index.html" class="logo">
                <img src="image/ikea-logo.svg" alt="Логотип">
            </a>
            <form class="search" method="get" action="goods.html">
                <input type="search" name="s" maxlength="150" class="search-input" spellcheck="false"
                       aria-label="Искать товары, новинки и вдохновение"
                       aria-placeholder="Искать товары, новинки и вдохновение" placeholder="Что вы ищете?"
                       autocapitalize="off" autocomplete="off" autocorrect="off">
                <button type="submit" class="btn search-btn" aria-label="найти"></button>
            </form>
            <a href="cart.html" class="btn btn-cart">
                <svg focusable="false" class="svg-icon svg-cart" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg" style="display: block;">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.9994 4H10.4373L10.1451 4.48017L6.78803 9.99716H3.00001H1.71924L2.02987 11.2397L3.65114 17.7248C3.98501 19.0603 5.18497 19.9972 6.56157 19.9972L17.4385 19.9972C18.8151 19.9972 20.015 19.0603 20.3489 17.7248L21.9702 11.2397L22.2808 9.99716H21H17.2113L13.8539 4.48014L13.5618 4H12.9997H12.0004H10.9994ZM14.8701 9.99716L12.4376 6H12.0004H11.5615L9.12921 9.99716H14.8701ZM5.59142 17.2397L4.28079 11.9972H19.7192L18.4086 17.2397C18.2973 17.6849 17.8973 17.9972 17.4385 17.9972L6.56157 17.9972C6.1027 17.9972 5.70272 17.6849 5.59142 17.2397Z"></path>
                </svg>
            </a>
        </div>
    </div>
</header>
    `;

    document.body.insertAdjacentHTML('afterbegin', header)
    }

    _generateCatalog() {
        getData.catalog(data => {
            let catalogList = ''
            data.forEach((item) => {
                catalogList += ` <li class="catalog-list__item"><a href="goods.html?cat=${item}">${item}</a></li>`
            })
    
            const catalogHTML = `
        <div class="catalog">
            <button type="button" class="btn btn-close catalog-btn" id="hnf-menu-close-btn" aria-expanded="true"
                    title="Закрыть меню" aria-label="Закрыть меню">
                <svg focusable="false" class="svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12.0002 13.4144L16.9499 18.3642L18.3642 16.9499L13.4144 12.0002L18.3642 7.05044L16.95 5.63623L12.0002 10.586L7.05044 5.63623L5.63623 7.05044L10.586 12.0002L5.63624 16.9499L7.05046 18.3642L12.0002 13.4144Z"></path>
                </svg>
            </button>
            <h2>Каталог</h2>
            <ul class="catalog-list">
                ${catalogList}
            </ul>
        </div>`
            document.body.insertAdjacentHTML('beforeend', catalogHTML)
            let catalogObj = new Catalog();
        })
    }

    _generateFooter() { 
        getData.catalog((data) => {
            let catalogList=''
            data.forEach(item=> {
                catalogList +=`
                 <li class="footer-list"><a href="goods.html?cat=${item}">${item}</a></li>
                `
            })
    
            const footer = `
        <footer>
        <div class="container">
            <div class="footer">
                <div class="footer-catalog">
                    <h2 class="footer-header">Каталог</h2>
                    <ul>
                       ${catalogList}
                    </ul>
                </div>
                <div class="footer-about">
                    <h2 class="footer-header">Все о нас</h2>
                    <ul>
                        <li class="footer-list"><a href="#">О компании</a></li>
                        <li class="footer-list"><a href="#">Демократичный дизайн</a></li>
                        <li class="footer-list"><a href="#">Работа у нас</a></li>
                        <li class="footer-list"><a href="#">Люди и планета</a></li>
                    </ul>
                </div>
                <div class="footer-connection">
                    <h2 class="footer-header">Свяжитесь с нами</h2>
                    <ul>
                        <li class="footer-list"><a href="#">Обратная связь</a></li>
                        <li class="footer-list"><a href="#">Контакты</a></li>
                        <li class="footer-list"><a href="#">Магазины и студии</a></li>
                        <li class="footer-list"><a href="#">Землевладельцам</a></li>
                        <li class="footer-list"><a href="#">Поставщикам</a></li>
                        <li class="footer-list"><a href="#">Пресс-служба</a></li>
                        <li class="footer-list"><a href="#">Вопросы и ответы</a></li>
                    </ul>
                </div>
            </div>
        </div>
    
    </footer>`
    
    
            document.body.insertAdjacentHTML('beforeend', footer)
    })
    }

    _generateGoodsPage() {
        const mainHeader = document.querySelector('.main-header')
        let goodsList = document.querySelector('.goods-list')
    
        const generateCards = (data) => {
            console.log(data);
            if (!data.length) {
                const goods = document.querySelector('.goods')
                goods.textContent = location.search !== '?wishlist' ? "По вашему запросу ничего не найдено" : "Ваш список желаний пуст"
            } else {
                goodsList.textContent = '';
                data.forEach(item => {
                    goodsList.insertAdjacentHTML('afterbegin',
                        `    <li class="goods-list__item">
                        <a class="goods-item__link" href="#">
                            <article class="goods-item">
                                <div class="goods-item__img">
                                    <img src=${item.img[0]}
                                         ${item.img[1] ? `data-second-image=${item.img[1]}` : ''}  alt=${item.name}>
                                </div>
                                ${item.count >= COUNTER ? `<p class="goods-item__new">Новинка</p>` : ''}
                                ${!item.count ? `<p class="goods-item__new">Нет в наличии</p>` : ''}
                                
                                <h3 class="goods-item__header">${item.name.toUpperCase()}</h3>
                                <p class="goods-item__description">${item.description}</p>
                                <p class="goods-item__price">
                                    <span class="goods-item__price-value">${item.price}</span>
                                    <span class="goods-item__currency"> ₽</span>
                                </p>
                                 ${item.count ? `<button class="btn btn-add-card" aria-label="Добавить в корзину" data-idd='${item.id}'></button>` : ''}
                            </article>
                        </a>
                    </li>`
                    )
                })
            }
    
            goodsList.addEventListener('click', (e) => {
                console.log(e.target)
                const btnAddCard = e.target.closest('.btn-add-card');
                if (btnAddCard) {
                    e.preventDefault();
                    userData.cartList = btnAddCard.dataset.idd
                }
            })
    
        }
    
        if (location.pathname.includes('goods') && location.search) {
            const search = decodeURI(location.search);
            const prop = search.split('=')[0].slice(1);
            const value = search.split('=')[1];
    
            if (prop === 's') {
                getData.search(value, generateCards);
                mainHeader.textContent = `Поиск: ${value}`
                console.log()
    
            } else if (prop === 'wishlist') {
                getData.wishList(userData.wishList, generateCards);
                console.log(userData.wishList)
                mainHeader.textContent = `Список желаний`
            } else if (prop === 'cat' || prop === 'subcat') {
                getData.category(prop, value, generateCards);
                mainHeader.textContent = `${value}`
            }
        }
    }

    _generateCartPage() {
        this.cart = new Cart();
    }

}
    

class Catalog {
    
    constructor() {
        
        this._btnBurger = document.querySelector('.btn-burger'),
        this._catalog = document.querySelector('.catalog'),
        this._btnClose = document.querySelector('.btn-close'),
        this._btnReturn = document.querySelector('.btn-return'),
        this._catalogList = document.querySelector('.catalog-list'),
        this._overlay = document.createElement('div')
        this._overlay.classList.add('overlay')
        document.body.insertAdjacentElement('beforeend', this._overlay)

        this._btnBurger.addEventListener('click', this._toggleMenu.bind(this))
        this._btnClose.addEventListener('click', this._toggleMenu.bind(this))
        this._overlay.addEventListener('click', this._toggleMenu.bind(this))
       
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                _toggleMenu()
            }
        })
    }

    _toggleMenu() {
        if (this._catalog.classList.contains('open')) {
            this._catalog.classList.remove('open')
            this._overlay.classList.remove('active')
        } else {
            this._catalog.classList.add('open')
            this._overlay.classList.add('active')
        } 
    }
}

class Cart {

    constructor() {

        this.getData = getData;
        this.userData = userData;

        this.getData.cart(this.userData.cartList, this.generateCart)

        this.cartList = document.querySelector('.cart-list')
        this._cartTotal= document.querySelector('.cart-total-price')

        if (location.pathname.includes('cart')) {
            this.getData.cart(this.userData.cartList, this.generateCart)
        }

        this.cartList.addEventListener('click',(e)=>{
            const target = e.target;
            const btnRemove = target.closest('.btn-remove')
            if(btnRemove){
                this.userData.deleteItemCart = btnRemove.dataset.idd
                this.getData.cart(this.userData.cartList, this.generateCart)
            }
    
        })
        this.cartList.addEventListener('change',(e)=>{
            this.userData.changeCountCartList = {
                id:e.target.dataset.idd,
                count:parseInt(e.target.value)
            };
            this.getData.cart(this.userData.cartList, this.generateCart)
    
        })
    }

    generateCart = (data) => {

        if (!data.length) {
            this.cartList.textContent = "Ваша корзина пуста"
        } else {
            this.cartList.textContent = '';
            let totalPrice =0;
            data.forEach(({name:itemName, id, img, price, description, count}) => {
                let options = '';
                let countUser = userData.cartList.find(item => item.id === id).count;
                if (countUser > count) {
                    countUser = count
                }
                for (let i = 1; i <= count; i++) {
                    options += `<option value=${i} ${countUser === i ? 'selected' : ''}>${i}</option>`
                }
                totalPrice+=countUser*price
                this.cartList.insertAdjacentHTML('beforeend',
                    `<li class="cart-item">
                    <div class="product">
                        <div class="product__image-container">
                            <img src=${img[0]} alt=${itemName}-${description}>
                        </div>
                        <div class="product__description">
                            <h3 class="product__name">
                                <a href="card.html#${id}">${itemName}</a></h3>
                            <p class="product_description-text">${description}</p>
                        </div>
                        <div class="product__prices">
                            <div class="product__price-type product__price-type-regular">
                                <div>
                                <div class="product__total product__total-regular">${price*countUser}₽</div>
                                ${ countUser > 1 
                                ? `<div class="product__price-regular">${price}₽</div>` : ``}     
                                </div>
                            </div>
                        </div>
                        <div class="product__controls">

                            <div class="product-controls__remove">
                                <button type="button" class="btn btn-remove" data-idd=${id}>
                                    <img src="image/remove-thin-24.16c1cc7a.svg" alt="Удалить товар">
                                </button>
                            </div>
                            <div class="product-controls__quantity">
                                <select title="Выберите количество" aria-label="Выберите количество" data-idd=${id}>
                                    ${options}
                                </select>
                            </div>
                        </div>
                    </div>
                </li>`)
            })
            this._cartTotal.textContent=totalPrice
        }
    }

}




class Item {
    constructor({category, count, description, id, img, name, price, subcategory}) {
        this.category = category
        this.count = count
        this.description = description
        this.id = id
        this.img = img
        this.name = name
        this.price = price
    }
}



class GetData {
    constructor() {
        this._url = 'database/dataBase.json';
        this._PARAM = {
            cat: 'category',
            subcat: 'subcategory',
            search: ['name','description','category','subcategory']
        }
    }

    _get(process) {
        fetch(this._url)
            .then(response => response.json())
            .then(process)
    }
    item(value, callback) {
        this._get((data) => {
            const result = data.find(item => item.id === value)
            callback(result)
        })
    }
    cart(list, callback) {
        this._get((data) => {
            let result = data.filter((item) =>
                list.some((obj) => obj.id === item.id)
            )
            callback(result)

        })
    }
    category(prop, value, callback) {
        this._get((data) => {
            const filtered = data.filter((item) => item[this._PARAM[prop]].toLowerCase() === value.toLowerCase())
            let result = []
            console.log(filtered);
            filtered.forEach((obj) => {
                let item = new Item(obj)
                result.push(item)
            })
            callback(result)
        })
    }
    search(value, callback) {
        this._get((data) => {
            const result = data.filter((item) => {
                for (const prop in item) {
                    if(this._PARAM.search.includes(prop) && item[prop].toLowerCase().includes(value.toLowerCase())){
                        return true;
                    }

                }
            })
            callback(result)
        })
    }
    catalog(callback){
        this._get((data) => {
            const result = data.map((item) => item.category).filter((value,index,self)=>{
                return self.indexOf(value) === index
            });
            callback(result)
        })
    }

    subCatalog(value,callback){
        this._get((data) => {
            const result = data
                .filter(item => item.category===value)
                .reduce((arr,item)=> {
                    if(!arr.includes(item.subcategory)){
                        arr.push(item.subcategory)
                    }
                    return arr;
                },[])
            callback(result)
        })
    }
}

class UserData {
    constructor() {
        this._cartListData = getLocalStorage('cartList');   
    }

    get cartList() {
        return this._cartListData;
    };

    set cartList(id){
        let obj = this._cartListData.find(item=>item.id===id);
        if (obj){
            obj.count++
        } else {
            obj={
                id,
                count:1,
            };
            this._cartListData.push(obj);
        }
        setLocalStorage('cartList',this.cartList)
    };

    set changeCountCartList(itemCart){
        let obj = this._cartListData.find(item=>item.id===itemCart.id);
        obj.count=itemCart.count;
        setLocalStorage('cartList',this.cartList)
    };

    set deleteItemCart(idd){
       let index = -1;
       this.cartList.forEach((item,i)=>{
           if(item.id === idd){
               index = i;
           }
       });
        this.cartList.splice(index,1)
        setLocalStorage('cartList',this.cartList)
    };

}



let getData = new GetData();
let userData = new UserData();
let app = new App();
