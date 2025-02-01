const clientsEndpoint = {
    getAll : ()=> '/v1/getAll',
    getOneWithId : (id)=> `/v1/getOne/${id}`
}

export default clientsEndpoint;