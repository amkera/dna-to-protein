translation_table = {
    'ATA':'I', 'ATC':'I', 'ATT':'I', 'ATG':'M',
    'ACA':'T', 'ACC':'T', 'ACG':'T', 'ACT':'T',
    'AAC':'N', 'AAT':'N', 'AAA':'K', 'AAG':'K',
    'AGC':'S', 'AGT':'S', 'AGA':'R', 'AGG':'R',
    'CTA':'L', 'CTC':'L', 'CTG':'L', 'CTT':'L',
    'CCA':'P', 'CCC':'P', 'CCG':'P', 'CCT':'P',
    'CAC':'H', 'CAT':'H', 'CAA':'Q', 'CAG':'Q',
    'CGA':'R', 'CGC':'R', 'CGG':'R', 'CGT':'R',
    'GTA':'V', 'GTC':'V', 'GTG':'V', 'GTT':'V',
    'GCA':'A', 'GCC':'A', 'GCG':'A', 'GCT':'A',
    'GAC':'D', 'GAT':'D', 'GAA':'E', 'GAG':'E',
    'GGA':'G', 'GGC':'G', 'GGG':'G', 'GGT':'G',
    'TCA':'S', 'TCC':'S', 'TCG':'S', 'TCT':'S',
    'TTC':'F', 'TTT':'F', 'TTA':'L', 'TTG':'L',
    'TAC':'Y', 'TAT':'Y', 'TAA':'_', 'TAG':'_',
    'TGC':'C', 'TGT':'C', 'TGA':'_', 'TGG':'W',
}


document.addEventListener('click', (e) => {
  if (e.target.matches("#translate")) {
    e.preventDefault()

    let sequence = document.getElementById("input-dna").value.toUpperCase().match(/[ACGT]+/g).join("");;
    let aa = ''

    if (sequence.length % 3 === 0) {

      for (let i = 0; i < sequence.length; i+=3) {
        let codon = sequence.slice(i, i+3)
        aa += translation_table[codon]
      }

      const p = document.createElement("p")
      p.innerHTML = aa;

      const hereIsYourAASequence = document.createElement("h3")
      hereIsYourAASequence.innerHTML = "Amino Acid Sequence"

      const main = document.getElementById("main")
      main.appendChild(hereIsYourAASequence)
      main.appendChild(p)

      return aa;

    } else {
      return (alert("Sequence length must be a multiple of 3."))
    }
  }
})
