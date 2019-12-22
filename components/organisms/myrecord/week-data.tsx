import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

import Text from '../../atoms/Text'
import { getWeekStep } from '../../../functions/googleFit'
import Graph from './graph'

let steps = new Array()

export default (props: any) => {
    const [data, setData] = useState()
    const [startYear, setStartYear] = useState()
    const [startDate, setStartDate] = useState()
    const [startMonth, setStartMonth] = useState()
    const [year, setYear] = useState()
    const [date, setDate] = useState()
    const [month, setMonth] = useState()
    const [st, setSt] = useState(false)
    useEffect(() => {
        getWeekStep(setData)
    }, [])

    useEffect(() => {
        if (data) {
            const length = data.length
            const start = data[0].date.split('-')
            setStartYear(start[0])
            setStartMonth(start[1])
            setStartDate(start[2])
            const today = data[length - 1].date.split('-')
            setYear(today[0])
            setMonth(today[1])
            setDate(today[2])
            data.map((v, i) => {
                steps[i] = v.value / 10000
            })
            setSt(true)
        }
    }, [data])

    return (
        <Wrapper>
            <Text color="black" level={4}>
                이번주 발자국
            </Text>
            {year ? (
                <Text>{`${startYear}년 ${startMonth}월 ${startDate}일 - ${month}월 ${date}일`}</Text>
            ) : (
                <></>
            )}
            {st && <Graph step={steps} />}
        </Wrapper>
    )
}

const Wrapper = styled.View({
    width: '100%',
    height: '47%',
    alignItems: 'center',
})
