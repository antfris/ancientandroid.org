## Patch #0019
##### Sync ableton with Pam's New Workout
<Audio name="Ableton Sync Jam" srv="001" src="/3-ableton-sync.mp3" />

#### How it works
Getting Ableton to sync and record with Pam's new workout. Pam's new workout has an input `Run`. When `Run` is held high (+1v), the clock start running. `Clk` receives a gate and measures the pulse width. First of all, test how much latency there is when recording, turn on `Reduce Latency when Monitoring`, add a `track delay` to the track being recorded with the amount that was measured.

In order to sync pam, set up Ableton midi track with a drum rack, load up a pulse into the drum rack and trigger it 24 times per quarter note, send this to the `click` input on pam. It's important to trigger 24 times as pam really needs this as a minimum. Then also send out a +1 volt signal to the `run` input.
