import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesAPI, tvAPI } from "../../api";

export default class extends React.Component {
    constructor(props) {
        super(props);
        const { location: {pathname}} = props;
        this.state = {
        result: null,
        loading: true,
        error: null,
        isMovie: pathname.includes("/movie/")
        };
    }
    


    async componentDidMount() {
        const {
            match: {
                params: { id }
            },
            history: {push}
        } = this.props;
        const {isMovie} = this.state;
        const parsedId = parseInt(id);

        if(isNaN(parsedId)) {
            return push("/");
        }
        let result = null;
        try {
            if(isMovie){
                const request = await moviesAPI.movieDetail(parsedId);
                result = request.data;
            } else {
                const request = await tvAPI.showDetail(parsedId);
                result = request.data;
            }
        } catch {
            this.setState({error:"Can't find information."})
        } finally {
            this.setState({loading:false,result});
        }
    }

    render() {
        const {result, loading, error, isMovie} = this.state;
        console.log(this.state);
        return ( <DetailPresenter 
            result={result}
            loading={loading}
            error={error}
            isMovie={isMovie}
        />
        );
    }
}