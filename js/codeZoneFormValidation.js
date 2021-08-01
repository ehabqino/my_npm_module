export const codeZoneFormValidation=(inputs)=> {
    console.log(inputs);
    inputs.forEach(input => {
        codeZoneInputFiltration(input);
    });
}