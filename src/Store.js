
class Store{

    static hasData( key ){
        return localStorage.getItem(key) ? localStorage.getItem(key) : false;
    }
    static setData( key, data ){

        let arr_data = [];

        if ( this.hasData( 'devs') ){
            arr_data = JSON.parse( this.hasData('devs'));
        }

        arr_data.push( data );

        localStorage.setItem(key, JSON.stringify(arr_data));
    }
}

export default Store;