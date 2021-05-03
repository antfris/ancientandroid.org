## Patch #0021
##### Gate patterns

Needing to find different creative ways to generate gate patterns using different means.

### Maths as a switch trigger
Using maths to trigger a sequential switch.

There are two gate patterns coming from pam, 8th notes and 16th notes. Maths1 is being triggered at the beginning of every bar, the end of rise on maths1 both triggers the switch and triggers maths4. maths4 then triggers the switch a second time.

<Routing>
 pam1 / seq1
 pam2 / seq2
 pam3 / maths1-trig
 maths-eor / maths4-trig
 maths1 / maths2
 maths4 / maths3
 maths-sum / seq-trig
</Routing>

<Setup>
pam1 / x2, gate
pam2 / x4, gate
pam3 / /4, gate
</Setup>
