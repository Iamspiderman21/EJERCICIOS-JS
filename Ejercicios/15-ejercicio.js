function transcribir (ADN) {
    const complemento = {
        'A': 'C',
        'C': 'T',
        'T': 'G',
        'U': 'R',
        'P': 'E'
    };
    return ADN.split ('').map(nucleotido => complemento[nucleotido]).join ('');
}
console.log(transcribir("ACEEPUTEGT")); 
console.log(transcribir("AHDGIKDPPSEA")); 