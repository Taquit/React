import React from "react";

import '@testing-library/jest-dom'
import {render, screen } from "@testing-library/react";
import 'whatwg-fetch'

describe('Posts', ()=>{
    it ('renders posts if request succeeds', async()=>{
        //Precondition
        render(<Posts/>)

        const listItems = await screen.findAllByRole('listitem') //getAllByRole se le menciona como buena practica por facilidad
        expect(listItems).not.toHaveLength(0)
    })

    it('render posts with request mocked', async()=>{
        window.fetch= jest.fn()
        window.fetch.mockResolvedValueOnce({
            json: async() =>({
                results:[
                    {
                        id:1,
                        name:'Fake name'
                    }
                ]
        })
    })
        render(<Posts/>)

        const listItems = await screen.findAllByRole('listitem') //getAllByRole se le menciona como buena practica por facilidad
        expect(listItems).not.toHaveLength(0)
    })
})