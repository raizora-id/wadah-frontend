import { Button } from "../button";
import { Accordion } from "../accordion";
import { Alert, AlertDescription, AlertTitle } from "../alert";
import { Avatar } from '../avatar'


import { createBuilder } from "./builder";

const { Builder } = createBuilder({
    Button,
    Accordion, 
    AlertDescription,
    AlertTitle,
    Alert,
    Avatar
})

export default Builder