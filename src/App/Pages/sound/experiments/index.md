## Sound Experiments

Explanations **and sound bytes** of sound experiments. This page is **constantly updating** so if you're interested in this sort of thing join my sound experiments mail list to get new notes and bytes once they're made, or follow me on https://twitter.com/antfris.

If you're wondering what this is all about, visit <Link to="/sound/experiments/why">why experiment with sound</Link> page.

Let's begin.

<More>This is more</More>

#### Exp. 24 - strings with verb

<More>
First take. strings out
</More>

#### Exp. 23 - waves from another world
<Audio srv="001" name="Waves from another world" src="/sound-experiments/2020/20200715_waves_on_another_world.mp3">10:14</Audio>
10 minutes of transient waves from another world. Each wave is generated from and white noise and interacting voltages and is completely unique, no two waves are ever the same. There are also occasionally some monks present, emanating from the ocean but only rarely are they heard.

<More>White noise and randomly modulated sound feeding into a quad vca and with a 16 beat sinewave bringing up the levels. The white noise and monks have linear curves and the two outputs from the sound generator have exponential curves. The white noise is running through a band pass filter. Each 16 beats four random voltages are selected, one sets the sample of the monks, two set the timbre and harmo of the sound generator and the 4th sets the frequency of the bp filter. A second sine wave set to randomly skip 80% of the time controls the cv for the vca for the monks.</More>

#### Exp. 22 - weird ominous droning om randomness
<Audio srv="001" name="Weird Ominous Droning" src="/sound-experiments/2020/20200715_droning_om_randomness.mp3">9:12</Audio>
10 minutes of an ominous droning undertone from an analog oscillator in C with omms from monks and a randomly generated noise fading in and out over a long sequence. Headphones or good speakers needed to hear the bass and for stereo effect.

<More>
    Analog oscillator panning left and right based on a triangle wave and inverted triangle wave. 4 randomly selected voltages each 16 beats to set the params on the digital noise generator, one random voltage running through a voltage controlled sequencer to preselect the mode. sampled monks being randomly selected each 16 beats. Crossfading between random noise and monks. Monks and noise panning every beat on one side and droning low c on other side. 40bpm.
</More>
<Modules>
    Maths4 is creating a triangle each beat or so, which is being fed back into maths3 to create an inverted wave out of sum using an offset and atenuverted. These two functions are panning channel 1 and 2 on xpan.
</Modules>

#### Exp. 21 - accenting high hat patterns
<Audio srv="001" src="/sound-experiments/2020/3-ableton-sync.mp3">TBC</Audio>
<Link to="sound-experiments/details/0021">Full details</Link>

#### Exp. 21 - gate pattern
<Audio srv="001" src="/sound-experiments/2020/3-ableton-sync.mp3">TBC</Audio>
<Link to="sound-experiments/details/0021">Full details</Link>


#### Exp. 20 - waves of ohm
<Audio srv="001" src="/sound-experiments/2020/3-ableton-sync.mp3">TBC</Audio>
Digital waves from another world, a world where the ocean is alive and talking to you.
<Link to="sound-experiments/details/0020">Full details</Link>

#### Exp. 19 - perfecting modular / Ableton sync
<Audio srv="001" src="/sound-experiments/2020/3-ableton-sync.mp3">3:27</Audio>
<Audio srv="001" src="/sound-experiments/2020/test/1.mp3">0:27</Audio>
<Audio srv="001" src="/sound-experiments/2020/test/2.mp3">2:12</Audio>
Full tune recorded, sequenced and mastered in 53 minutes as a test. <Link to="sound-experiments/details/0019">Full details</Link>














## Patch B11 #0018
<Images srv="001" height="140px" src="
    /modules/pam-side2.jpg,
    /modules/maths-side2.jpg,
    /modules/plaits-side2.jpg
" />
<Routing>
    pam-gate(x1) / maths4-trig
    maths4-out / plaits-timbre
    maths3-out / maths4-fall
    pam-gate(x1) / plaits-trig
</Routing>
<Setup>
    Plaits / set to green 3
</Setup>

## Patch B10 #0017
<Images srv="001" cols="6" height="140px" src="
    /modules/pam-side2.jpg,
    /modules/maths-top.jpg,
    /modules/quadvca-top.jpg,
    /modules/plaits-top.jpg,
    /modules/xpan-top.jpg,
    /modules/mult-top.jpg
" />
<Routing>
    pam1 / maths1-cycle
    pam2 / maths4-trig
    pam3 / vca3-in
    pam4 / vca4-in
    vca4-out / vca3-cv
    vca3-out / mult1-in
    mult1-out / maths1-both
    mult1-out / xpan1-xfade
    mult1-out / vca2-in
    vca2-out / plaits-harmo
    math4-out / vca1-cv
    vca1-out / mult2-in
    mult2-in / plaits-timbre
    mult2-in / plaits-fm
    mult2-in / plaits-morph
</Routing>
<Setup>
    pam1 / gate, /16
    pam2 / gate, /16
    pam3 / triangle, /16
    pam4 / random, /16
</Setup>

## Patch B9 #0016
<Images srv="001" cols="5" height="140px" src="
    /modules/pam-side.jpg,
    /modules/maths-top.jpg,
    /modules/quadvca-top.jpg,
    /modules/plaits-top.jpg,
    /modules/mult-top.jpg
" />
<Routing>
    pam1 / math1-cycle
    math1 / vca1in
    vca1out / mult1
    mult1 / plaits-timbre
    mult1 / plaits-fm
    pam2 / math4-trig
    math4 / mult2
    mult2 / vca1cv
    mult2 / vca2in
    vca2out / plaits-harmo
    pam3 / math1-both
</Routing>
<Setup>
    pam1 / gate, /16, width=95%
    pam2 / gate, /16, width=5%
    pam3 / triangle wave, /16, width=20%
</Setup>

## Patch B8 #0015
<Images srv="001" height="140px" src="
    /modules/plaits-top.jpg,
    /modules/maths-top.jpg,
    /modules/pam-side.jpg
" />
<Routing>
    pam1 / math4-trig
    math4out / plaits-harmo
    math4eoc / math1-trig
    math1out / plaits-timbre
    plaits-out / mix
</Routing>
<Setup>
    pam1 / gate, /32
</Setup>

## Patch B7 #0014
<Images srv="001" height="140px" src="
    /modules/xpan-side.jpg,
    /modules/plaits-side.jpg,
    /modules/maths-side.jpg
" />
<Routing>
    maths4 / plaits-harmo
    maths4f / maths1-dual
    maths-sum / xpan1-pan
    plaits-out / mix
</Routing>
<Setup>
    Plaits / set to green 2
</Setup>

## Patch B6 #0013
<Images srv="001" height="140px" src="
    /modules/pam-side.jpg,
    /modules/maths-side.jpg,
    /modules/plaits-side.jpg
" />
<Routing>
    pam1 / maths2
    pam2 / maths3
    maths-sum / plaits-1voct
    pam3 / plaits-trig
    maths1 / pam-cv1
</Routing>
<Setup>
    pam1 / triangle, /32
    pam2 / triangle, /4, width=100%
    pam3 / gate, x2, estep=8, etrig=cv1
</Setup>

## Patch B5 #0012
<Images srv="001" cols="5" height="140px" src="
    /modules/plaits-top.jpg,
    /modules/pam-top.jpg,
    /modules/maths-top.jpg,
    /modules/xpan-top.jpg,
    /modules/mult-top.jpg
" />
<Routing>

</Routing>
<Setup>

</Setup>

## Patch A12 #0011
<Images srv="001" height="140px" src="
    /modules/plaits-top.jpg,
    /modules/picovco-top.jpg,
    /modules/pam-side.jpg
" />
<Routing>

</Routing>
<Setup>

</Setup>

## Patch A11 #0010
<Images srv="001" height="140px" src="
    /modules/picovco-top.jpg,
    /modules/wasp-top.jpg
" />
<Routing>

</Routing>
<Setup>

</Setup>

## Patch A10 #0009
<Images srv="001" height="140px" src="
    /modules/picovco-top.jpg,
    /modules/wasp-top.jpg
" />
<Routing>

</Routing>
<Setup>

</Setup>

## Patch A9 #0008
<Images srv="001" height="140px" src="
    /modules/plaits-top.jpg,
    /modules/sq1-top.jpg
" />
<Routing>

</Routing>
<Setup>

</Setup>

## Patch A8 #0007
<Images srv="001" height="140px" src="
    /modules/plaits-top.jpg,
    /modules/sq1-top.jpg
" />
<Routing>
    plaits-out / mix
    plaits-aux / mix
    sq1-cvA / plaits-1voct
    sq1-cvB / plaits-harmo
</Routing>
<Setup>
    Plaits / set to chord mode
    SQ1 / cvA playing notes in minor scale, cvB is modulating between minor and major chords within key
</Setup>




## Patch A7 #0006
<Images srv="001" height="140px" src="
    /modules/plaits-side.jpg
" />
<Routing>
    plaits-out / mix
    plaits-aux / mix
</Routing>
<Setup>
    Plaits  / manual mod. on timbre
</Setup>

## Patch A6 #0005
<Images srv="001" height="140px" src="
    /modules/plaits-top.jpg,
    /modules/wasp-top.jpg
" />
<Routing>
    plaits-out / wasp-in
    wasp-lp / mix
</Routing>
<Setup>
    Plaits / manual mod. on harmonics
    Wasp / manual mod. freq.
</Setup>

## Patch #0004 (A5)
Same as the last patch but with the wasp after the vca instead of before.
<Images srv="001" cols="5" height="140px" src="
    /modules/sq1-top.jpg,
    /modules/plaits-top.jpg,
    /modules/wasp-top.jpg,
    /modules/dualadsr-top.jpg,
    /modules/quadvca-top.jpg
" />

<Routing>
    plaits-out / vca1-in
    vca1-out / wasp  
    sq1-gateA / adsr-gate
    adsr-out / vca1-cv
    sq1-cvA / wasp-cv2
</Routing>



## Patch #0003 (A4)
Modulating the wasp using sq1.
<Images srv="001" cols="5" height="140px" src="
    /modules/sq1-top.jpg,
    /modules/plaits-top.jpg,
    /modules/wasp-top.jpg,
    /modules/dualadsr-top.jpg,
    /modules/quadvca-top.jpg
" />

<Routing>
plaits-out / wasp
    xwasp-lp / vca1-in
    sq1-gateA / adsr-gate
    adsr-out / vca1-cv
    sq1-cvA / wasp-cv2
</Routing>


## Patch #0002 (A3)
Sequencing notes and mode of Plaits using SQ1 and using sp404 as an effects unit.
<Images srv="001" cols="4" height="140px" src="
    /modules/sq1-top.jpg,
    /modules/plaits-side2.jpg,
    /modules/sp404-top.jpg
" />

<Routing>
    plaits-out / sp404
    sp404 / mix
    sq1-gateA / plaits-trig
    sq1-cvA / plaits-1voct
    sq1-cvB / plaits-model
</Routing>


## Patch #0001 (A2)
Sequencing notes and model of Plaits using SQ1.
<Images srv="001" cols="4" height="140px" src="
    /modules/sq1-top.jpg,
    /modules/plaits-side.jpg
" />

<Routing>
    plaits-out / mix
    sq1-gateA / plaits-trig
    sq1-cvA / plaits-1voct
    sq1-cvB / plaits-model
</Routing>

### Misc patch ideas

- Get a gate sequence to start at 16th notes and slew up to 32nd notes.
- Find out if Morphagene overlaps samples when triggered in succession.
- Document previously documented patches.
- Record loops in time with Morphagene.
- Use the envelope follower.
- Use output of microphone from envelope follower to go to Morphagene.
- Live vocal recording with morphagene, with overlaying, looping, new slice, making backwards.
- Convert pitch to CV.
- Pitch shift and layer vocals.
- Sample each day.
- Figure out getting the right recording levels and output in Ableton.
- Random sample and hold from white noise.
- Random sample and hold from noise to control hi-hats.
- Create a gate stream from a trigger. Trigger input into maths, cycle end of rise on ch1, put through vca cv with a downward ramp in ch4 to create a 'gate flutter'. change number of gates generated with downward ramp, change distance between flutters with rise length.
- Slew notes with maths.
- Use pressure points to change the sound of a snare to toms to do a drum roll, and also ratchet the snare.
- Blade runner style bass
- Find and document 50 ways of creating melodies using maths, pam, scales, steppy, quadvca, grids & 3 voltage sequencers.
- Write page on all maths logic patches. [Details here](https://www.youtube.com/watch?v=n_1bBTPBpxg)
