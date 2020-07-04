export const required = value => {
    if(value){
        return undefined;
        console.log('test')
    }else{
        return 'Field is required';
    }
}
export const maxLength = value => {
    if(value && value.length > 30){
        return 'max length 30';
        console.log('test2')
    }else{
        return undefined;
    }
}

