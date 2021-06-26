import React, {useState} from 'react';

type RatingValuesType = {}

export function UncontrolledRating() {

    let [value, setValue] = useState<number>(0);


    const SetRatingHandler = (value:number) => {
        setValue(value);
    };

    return (
        <div>
            <Star selected={value > 0} SetRatingHandler={()=>SetRatingHandler(1)} />
            <Star selected={value > 1} SetRatingHandler={()=>SetRatingHandler(2)} />
            <Star selected={value > 2} SetRatingHandler={()=>SetRatingHandler(3)} />
            <Star selected={value > 3} SetRatingHandler={()=>SetRatingHandler(4)} />
            <Star selected={value > 4} SetRatingHandler={()=>SetRatingHandler(5)} />
        </div>
    );

}

type StarPropsType = {
    selected: boolean

    SetRatingHandler: () => void
}

export function Star(props: StarPropsType) {
    return <span onClick={()=>props.SetRatingHandler()}>{props.selected ? <b> star</b> : ' star'}</span>;
}
