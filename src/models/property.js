const propertyArray = []

class Properties{
    constructor({
        propertyId,
        owner,
        status,
        price,
        state,
        city,
        address,
        type,
        created_on,
        image_url
    }){
        this.propertyId = propertyId;
        this.owner = owner;
        this.status = status;
        this.price = price;
        this.state = state;
        this.city = city;
        this.address = address;
        this.type = type;
        this.created_on = created_on;
        this.image_url = image_url;

    }
}

module.exports = {Properties,propertyArray}