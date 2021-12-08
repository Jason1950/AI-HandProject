import Stats from './stats.module.js';
import * as THREE from './build/three.module.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';

import {slotFunctionForAll} from'./slot.js'
let status;
let renderer, scene, cameraJS;
let idname = 'hand01';
let idname2 = 'cube01';
let idname3 = 'cube02';
let frame = 0;
let clickCount = 0;

let resizePara = 1;

let handPic1 = THREE.ImageUtils.loadTexture('./hand1.png');
let handPic2 = THREE.ImageUtils.loadTexture('./hand2.png');

let handState = false;
let handContinue = 0;

let handXAI = 0;
function initWebGL(){
    // let container = document.getElementById("fpsstate"); //获取container
    status = new Stats(); //创建频率显示
    // let rightNegative = false;
    // container.appendChild(renderer.domElement);
    // container.appendChild(status.dom); //频率挂到左上角

    let container2 = document.getElementById("main3-canvas"); //获取container

    renderer = new THREE.WebGLRenderer({canvas: container2,antialias: true,alpha: true});

    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth*resizePara, window.innerHeight*resizePara );
    
    console.log('x: ',window.innerWidth);
    console.log('y: ',window.innerHeight);
    renderer.setClearColor( 0x000000, 0 ); // the default
    renderer.outputEncoding = THREE.sRGBEncoding;

    // container2.appendChild( renderer.domElement );

    container2.appendChild(status.dom); //频率挂到左上角

    // scene
    scene = new THREE.Scene();

    // cameraJS

    //sample01
    var VIEW_ANGLE = 40, ASPECT =  window.innerWidth / window.innerHeight, NEAR = 1, FAR = 2000;
	cameraJS = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
	scene.add(cameraJS);
	cameraJS.position.set(0,0,1200);
	cameraJS.lookAt(scene.position);	

    //sample02
    // cameraJS = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 10, 1000 );
    
    //sample03
    // cameraJS = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
    // cameraJS.position.set( - 10, 0, 23 );
    scene.add( cameraJS );

    // controls
    const controls = new OrbitControls( cameraJS, renderer.domElement );
    controls.addEventListener( 'change', render );
    controls.minDistance = 10;
    controls.maxDistance = 50;
    controls.enablePan = false;
    controls.enabled = false;

    controls.dampingFactor = 0.1;
    controls.enableZoom = false;

    controls.maxPolarAngle = Math.PI / 2 - 0.11;
    controls.minPolarAngle = Math.PI / 2 - 0.11;

    // controls.minPolarAngle = Math.PI / 3 - 0.15;
    // controls.maxAzimuthAngle = Math.PI *1/4 ;   //from 120 ~ -180 degree 
    // controls.minAzimuthAngle = -Math.PI *2/3 ;
    console.log(controls);


    // ambient
    scene.add( new THREE.AmbientLight( 0xffffff, .2 ) );

    // light
    const light = new THREE.PointLight( 0xffffff, 1.5 );
    cameraJS.add( light );
    // console.log(scene);

    var geom = new THREE.BoxBufferGeometry(100, 100, 0.1);
    // var geometry = new THREE.SphereGeometry( 32.5, 32, 32 );
    // let plane = new THREE.Mesh(geom, new THREE.MeshBasicMaterial({
    //     color: Math.random() * 0x888888 + 0x888888
    //   }));
    let plane = new THREE.Mesh(geom, new THREE.MeshBasicMaterial({
        // map: THREE.ImageUtils.loadTexture('./hand1.JPG')
        map : handPic1,
        transparent: true

    }));
      
    plane.name = idname;
    plane.position.y -= 1.5;
    plane.position.z += 0.5;
    scene.add(plane);

    let group = new THREE.Group()
    let plane2 = new THREE.Mesh(new THREE.BoxBufferGeometry(70, 300, 0.1), new THREE.MeshBasicMaterial({
            color: 0x000000}));
    // plane2.position.y -= 120;
    plane2.position.x += 250;

    plane2.position.z -= 202;
    // plane2.name = idname2;
    group.add(plane2);
    plane2 = new THREE.Mesh(new THREE.SphereGeometry(35, 30, 30), new THREE.MeshBasicMaterial({
        color: 0x000000}));
    // plane2.position.y -= 120;
    plane2.position.x += 250;
    plane2.position.y -= 150;
    plane2.position.z -= 202;
    // plane2.name = idname2;
    group.add(plane2);

    plane2 = new THREE.Mesh(new THREE.SphereGeometry(35, 30, 30), new THREE.MeshBasicMaterial({
        color: 0x000000}));
    // plane2.position.y -= 120;
    plane2.position.x += 250;
    plane2.position.y += 150;
    plane2.position.z -= 202;
    // plane2.name = idname2;
    group.add(plane2);

    group.position.x += 38;
    group.position.y += 120;
    scene.add(group);


    

    let plane3 = new THREE.Mesh(new THREE.SphereGeometry(70, 30, 30), new THREE.MeshBasicMaterial({
        // color: Math.random() * 0x888888 + 0x888888}));
        color: 0xff0000}));
        
    plane3.position.y += 199;
    plane3.position.x += 270;
    plane3.position.z -= 101;

    // plane3.center.set(1,1);

    plane3.name = idname3;
    scene.add(plane3);

    var geom2 = new THREE.BoxBufferGeometry(window.innerWidth*0.9, window.innerHeight*0.5, 0.1);
    let plane4 = new THREE.Mesh(geom2,new THREE.MeshBasicMaterial({
        color: Math.random() * 0x888888 + 0x888888}));
    // scene.add(plane4);
    console.log('cube size : ', window.innerWidth*0.9, window.innerHeight*0.9);

    // window.innerWidth, window.innerHeight

    // let plane2 = new THREE.Mesh(geom, new THREE.MeshBasicMaterial({
    //     color: Math.random() * 0x888888 + 0x888888}));
    // plane2.position.y -= 120;
    // plane2.position.z -= 0.1;
    // plane2.name = 'hellomovecube';
    // scene.add(plane2);


    document.addEventListener( 'mousedown', onDocumentMouseDown, false );
    // document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    window.addEventListener( 'resize', onWindowResize );
    document.addEventListener("keydown", onDocumentKeyDown, false);

}

function onDocumentMouseDown( event ) 
{
	// the following line would stop any other event handler from firing
	// (such as the mouse's TrackballControls)
	// event.preventDefault();
	clickCount += 1;
	console.log("Click.");
	let moveTarget = scene.getObjectByName(idname);
    if(clickCount%2==0){
        moveTarget.material.map = handPic1;
    }else{
        moveTarget.material.map = handPic2;
    }



	// // update the mouse variable
	// mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	// mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	
	// // find intersections

	// // create a Ray with origin at the mouse position
	// //   and direction into the scene (camera direction)
	// var vector = new THREE.Vector3( mouse.x, mouse.y, 1 );
	// projector.unprojectVector( vector, camera );
	// var ray = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

	// // create an array containing all objects in the scene with which the ray intersects
	// var intersects = ray.intersectObjects( targetList );
	
	// // if there is one (or more) intersections
	// if ( intersects.length > 0 )
	// {
	// 	console.log("Hit @ " + toString( intersects[0].point ) );
	// 	// change the color of the closest face.
	// 	intersects[ 0 ].face.color.setRGB( 0.8 * Math.random() + 0.2, 0, 0 ); 
	// 	intersects[ 0 ].object.geometry.colorsNeedUpdate = true;
	// }

}


function onDocumentMouseMove( event ) 
{
	// the following line would stop any other event handler from firing
	// (such as the mouse's TrackballControls)
	// event.preventDefault();

	// update sprite position
    let moveTarget = scene.getObjectByName(idname);
    let positionX = -450+880*(event.clientX/window.innerWidth);
    let positionY = 180-370*(event.clientY/window.innerHeight);
	moveTarget.position.set( positionX,  positionY, 0 );

    // moveTarget.position.y -= 0.5;
    if (frame%10==0){
        console.log(event.clientX, event.clientY);
        console.log(moveTarget.position.x,moveTarget.position.y);
        // console.log(window.innerWidth,window.innerHeight);
    }
}


function onWindowResize() {
    renderer.setSize( window.innerWidth, window.innerHeight );
    cameraJS.aspect = window.innerWidth / window.innerHeight;
    cameraJS.updateProjectionMatrix();
    render();
}

function render() {
    frame += 1;
    status.update();
    // scene.children[3].rotation.y += 0.02;
    renderer.render( scene, cameraJS );
    requestAnimationFrame(render);
    // console.log(handXAI);
    TWEEN.update();

}

initWebGL();
render();








const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');

let renderCount = 0;
let moveTarget = scene.getObjectByName(idname);


// right hand
let rightHandEffectFrame = 0;
let rightPositive = false;
let rightHandLastState = false;

// left hand
let leftHandEffectFrame = 0;
let leftPositive = false;
let leftHandLastState = false;

function onResults(results) {
    let moveTarget = scene.getObjectByName(idname);

    renderCount += 1;
    // canvasCtx.clip();
    canvasCtx.save();
    
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
        results.image, 0, 0, canvasElement.width, canvasElement.height);
    
    if (results.multiHandLandmarks) {

        if (renderCount%2 ==0){
            let handposX = Math.round(results.multiHandLandmarks[0][0].x* 1000)/ 1000;

            handXAI = handposX;
            let handposY = Math.round(results.multiHandLandmarks[0][0].y* 1000)/ 1000;
            // console.log('hand log : ', handposX);
            // if ((handposX)>0.5){
            //     console.log('大於0.5, position++, hand log : ', handposX);
            //     moveTarget.position.x +=0.18;
            // }else if( handposX <= 0.5){
            //     console.log('小於0.5, position--, hand log : ', handposX);
            //     moveTarget.position.x -=0.18;
            // }
            // console.log('hand move !');
            handMoveCube(handposX,handposY);

            let checkPoint = results.multiHandLandmarks[0];

            let fingerDis = twoPointDistance(checkPoint[0],checkPoint[12]);
            let palmDis = twoPointDistance(checkPoint[0],checkPoint[5]);

            let midPoint = [checkPoint[5],checkPoint[9],checkPoint[13],checkPoint[17]];
            let endPoint = [checkPoint[8],checkPoint[12],checkPoint[16],checkPoint[20]];

            
            let midTotal = 0;
            midPoint.forEach(element => {
                midTotal += twoPointDistance(checkPoint[0],element);
            });

            let endTotal = 0;
            endPoint.forEach(element => {
                endTotal += twoPointDistance(checkPoint[0],element);
            });

            if (endTotal > midTotal){
            // if (fingerDis > palmDis){
                handState = false;
                // handContinue -= 1;
                handContinue = Math.min(0,handContinue-1);
            }else{
                handState = true;
                // handContinue += 1;
                handContinue = Math.max(10,handContinue+1);
            }

            // if(handState){
            if(handContinue>0){
                moveTarget.material.map = handPic2;
                cubeGO(handposX,handposY)
            }else{
                moveTarget.material.map = handPic1;
            }
        }
        for (const landmarks of results.multiHandLandmarks) {
            drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
                color: '#00FF00',
                lineWidth: 5
            });
            drawLandmarks(canvasCtx, landmarks, {
                color: '#FF0000',
                lineWidth: 2
            });
        }
    }

    // ******************************************************* //
    //                                                         //
    //                   HAND Procces  Start                   //
    //                                                         // 
    // ******************************************************* //

    function bounce (){
        let moveTarget3 = scene.getObjectByName(idname3);
        
        new TWEEN.Tween(moveTarget3.position)
          .to({y: 199}, 500)
          .easing(TWEEN.Easing.Cubic.Out)
          .start()

          
          /* .onComplete(() => {
            new TWEEN.Tween(cube.position)
              .to({y: 0}, 500)
              .easing(TWEEN.Easing.Cubic.In)
              .start()
           } 
        )*/
    }
    let moveTarget3 = scene.getObjectByName(idname3);
    if ( moveTarget3.position.y<-50){
        bounce()
        slotFunctionForAll();
        console.log('move')
    }







    // ******************************************************* //
    //                                                         //
    //                      HAND Procces  END                  //
    //                                                         // 
    // ******************************************************* //
    canvasCtx.restore();
}


function twoPointDistance(p1,p2){
    let dep = Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
    return dep;
}


function handMoveCube(x,y){
    let moveTarget = scene.getObjectByName(idname);
    // let positionX = 450-880*(x);
    // let positionY = 190-370*(y);
    
    let positionX = (window.innerWidth)*(0.5-x);
    let positionY = (window.innerHeight)*(0.5-y)+100;
	moveTarget.position.set( positionX,  positionY, 0.5 );
}

function cubeGO(x,y){
    // let positionX = 450-880*(x);
    // let positionY = 190-370*(y);

    let positionX = (window.innerWidth)*(0.5-x);
    let positionY = (window.innerHeight)*(0.5-y)+100;
    // let moveTarget = scene.getObjectByName(idname2);
    let moveTarget;
    let moveTarget3 = scene.getObjectByName(idname3);

    if(Math.abs(moveTarget3.position.x - positionX)<50 && Math.abs(moveTarget3.position.y - positionY)<50 && moveTarget3.position.y<200 && moveTarget3.position.y>-70){
        moveTarget3.position.set( 270,  positionY, -101);
    }
    console.log('y:',moveTarget3.position.y)

    if(moveTarget3.position.y>200) moveTarget3.position.y =199
    
    // if(Math.abs(moveTarget.position.x - positionX)<50 && Math.abs(moveTarget.position.y - positionY)<50){
    //     moveTarget.position.set( positionX,  positionY, 0 );
    // }
    // else if(Math.abs(moveTarget3.position.x - positionX)<50 && Math.abs(moveTarget3.position.y - positionY)<50){
    //     moveTarget3.position.set( 220,  positionY, -101);
    // }
}

const hands = new Hands({
    locateFile: (file) => {

        console.log('Loading AI file: ',file);
        return `./AImodel/${file}`;
        // return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    }
});
hands.setOptions({
    maxNumHands: 1,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
});
hands.onResults(onResults);

const camera = new Camera(videoElement, {
    onFrame: async () => {
        await hands.send({
            image: videoElement
        });
    },
    width: 1280,
    height: 720
});
camera.start();



function onDocumentKeyDown(event) {
    var keyCode = event.which;
    // console.log('key : ', keyCode);
    if (keyCode == 90) {   
        // ******* z = 90 ********* //
        // walkGoAndBack();
        let moveTarget = scene.getObjectByName(idname2);
        moveTarget.position.x += 3;
        console.log('x : ', moveTarget.position.x);

    } else if (keyCode == 88) {     
        // ******* x = 88 ********* //
        // animationPlay(action, 'left');
        
    } else if (keyCode == 67) {
        // ******* c = 67 ********* //
        // animationPlay(action, 'jump');

    } else if (keyCode == 86) {
        // ******* v = 86 ********* //
        // animationPlay(action, 'hello');

    } else if (keyCode == 83) {
        // ******* s = 83 ********* //
        // animationPlay(action, 'hello');
        // walkGoOutTest('right');

    } else if(keyCode == 65){
        // ******* A = 65 ********* //
        // *** bg tweenMax change *** //
        // tweenMaxBackGround();

        // *** woman and man go together *** //
        // animationPlay(action, 'right');
        // setTimeout(()=>{
            // animationPlay(w_action, 'right');
        // },300)

        // let object3DWoman = scene.getObjectByName( "groupWoman" );
        // console.log('object3DWoman : ', object3DWoman);
        // console.log('children : ', object3DWoman.children[0]);
        
        
    }
};