import React from 'react';
import { getFunName } from '../helpers';

class StorePiker extends React.Component {
    goToStore(event) {
        event.preventDefault();
        console.log('You changed the URL');
        console.log(this.storeInput.value);

        const storeId = this.storeInput.value;
        console.log(`Going to ${storeId}`);
        this.context.router.transitionTo(`/store/${storeId}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={ (e) => this.goToStore(e) }>
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={ getFunName() } ref={(input) => {this.storeInput = input}} />
                <button type="submit">Visit Store</button>
            </form>
        ) 
    }
}

StorePiker.contextTypes = {
  router: React.PropTypes.object  
}

export default StorePiker;