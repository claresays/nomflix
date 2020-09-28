import React from "react";
import TVPresenter from "./TVPresenter";
import { tvAPI } from "api";

export default class extends React.Component{
    state={
        topRated: null,
        popular: null,
        airingToday: null,
        loading: true,
        error: null
    };
    async componentDidMount(){
        try{
            const {data: {results: topRated}} = await tvAPI.topRated();
            const {data: {results: popular}} = await tvAPI.popular();
            const {data: {results: airingToday}} = await tvAPI.airingToday();
            this.setState({topRated,popular,airingToday});

        } catch {
            this.setState( {
                error: "Can't find TV show information."
            })
        } finally {
            this.setState({loading:false});
        }
    }

    render() {
        const {topRated,popular,airingToday, loading, error} = this.state;

        return (<TVPresenter 
            topRated={topRated}
            popular={popular}
            airingToday={airingToday}
            loading={loading}
            error={error}
        />
        );
    }
}