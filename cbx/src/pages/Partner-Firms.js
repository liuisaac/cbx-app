import TransitionF from'../Transition-F/Transition-F.jsx';

export default function(){
    const transitionFText = [
        "We are partnered with XX firms with XX millions in AUM filler text. ",
        "Second line of the paragraph asdfa sdfadsfad sfad sfasdfa dsfadsfadsfa daf a. ",
        "Third line of the paragraphasdfasfa dsfasfaafsdf",
      ];

    return (
        <>
        <h1>NAVBAR HERE</h1>
        <h1>PARTNER FIRMS</h1>
        <TransitionF text={transitionFText}/>
        </>
    );
}