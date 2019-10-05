import { userService } from '../_services/';

export const listAction = {
    getList
};

function getList(){
    return dispatch => {
        let apiEndpoint = 'employees';
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(changeList(response.data.data));
        }).catch((err)=>{
            console.log(err);
        })
    };
}

export function changeList(list){
    return{
        type: "FETCHED_ALL_LIST",
        list: list
    }
}