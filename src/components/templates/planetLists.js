import React, { useEffect, useState } from "react";
import { Box, Button, Alert, CircularProgress } from "@mui/material";
import axios from "axios";
import { orderArrayByProperty } from "../../helpers";
import FilterSection from "../../ui/molecules/FilterSection";
import PlanetCards from "../../ui/organisms/Cards";
import styles from "./styles";
import Pagination from "../../ui/organisms/Pagination";

const PlanetList = () => {

    const [planets, setPlanets] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [isErrorFetching, setIsErrorFetching] = useState(false);
    const [hasPrev, setHasPrev] = useState(false);
    const [hasNext, setHasNext] = useState(true); 
    const [prevUrl, setPrevUrl] = useState('');
    const [nextUrl, setNextUrl] = useState('');

    const goNext = () => {
        getPlanets(nextUrl);
    };

    const goPrev = () => {
        getPlanets(prevUrl);
    };

    const handleFilterChange = order => {
        const orderedArray = orderArrayByProperty(planets, order);
        setPlanets(orderedArray);
    }

    const hasCurrentFilter = () => {
        const currentFilter = localStorage.getItem('currentFilter');
        if(currentFilter && currentFilter !== ''){
            return currentFilter;
        } else {
            return false;
        }
    }

    const getPlanets = async (url = process.env.REACT_APP_BASE_URL) => {
        try {
            const { data, status } = await axios.get(url);
            if (status === 200) {
                const { results, next, previous } = data;
                if (next) {
                    setHasNext(true);
                    setNextUrl(next);
                } else {
                    setHasNext(false);
                }
                if (previous) {
                    setHasPrev(true);
                    setPrevUrl(previous);
                } else {
                    setHasPrev(false);
                }
                const hasFilter = hasCurrentFilter();
                const finalArray = (hasFilter) ? orderArrayByProperty(results, hasFilter) : results;
                setPlanets(finalArray);
                window.scrollTo(0, 0);
                setIsFetching(false);
            } else {
                setIsErrorFetching(true);
                setIsFetching(false);
            }
        } catch (error) {
            setIsErrorFetching(true);
            setIsFetching(false);
        }
    };

    useEffect(() => {
        getPlanets();
    }, []);

    return (
        <Box>
            {   isErrorFetching && 
                <Alert severity="warning">Oops! Something went wrong. Please try again later</Alert> 
            }
            {
                !isErrorFetching && isFetching && <CircularProgress color="warning" />
            }
            {
                !isErrorFetching && !isFetching && planets.length > 0 && <>
                    <FilterSection handleFilterChange={handleFilterChange} refetchPlanets={getPlanets} />
                    <Box sx={ styles }>
                        {
                            planets.map((planet, index) => {
                                return (
                                    <PlanetCards key={index} infoPlanet={planet} />
                                );
                            })
                        }
                    </Box>
                    <Pagination hasNext={hasNext} hasPrev={hasPrev} getInfo={getPlanets} goNext={goNext} goPrev={goPrev} />
                </>
            }
        </Box>
    );
}

export default PlanetList;