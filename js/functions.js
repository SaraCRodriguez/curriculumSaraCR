// FONDO
var partNum = 70;


var c = document.getElementById('c');
var ctx = c.getContext('2d');

var w = window.innerWidth;
var h = window.innerHeight;

var mouse = {
    x: w / 2,
    y: 0
};

document.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX || e.pageX;
    mouse.y = e.clientY || e.pageY
}, false);

var particles = [];
for (i = 0; i < partNum; i++) {
    particles.push(new particle);
}

function particle() {
    this.x = Math.random() * w - w / 5;
    this.y = Math.random() * h;

    this.r = Math.random() * 7.5 + 3.25;
}

var draw = function () {
    c.width = w;
    c.height = h;

    for (t = 0; t < particles.length; t++) {
        var p = particles[t];
        var nowX = p.r + mouse.x / 4.6;
        var nowY = p.r + mouse.y / 4.6;
        var color = '#f48fb980';

        if (p.r < 10) {
            nowX = p.x + mouse.x / 0.5;
            nowY = p.y + mouse.y / 0.5;
        };
        if (p.r < 9) {
            nowX = p.x + mouse.x / 2;
            nowY = p.y + mouse.y / 2;
        };
        if (p.r < 8) {
            nowX = p.x + mouse.x / 3.5;
            nowY = p.y + mouse.y / 3.5;
        };
        if (p.r < 7) {
            nowX = p.x + mouse.x / 5;
            nowY = p.y + mouse.y / 5;
        };
        if (p.r < 6) {
            nowX = p.x + mouse.x / 6.5;
            nowY = p.y + mouse.y / 6.5;
        };
        if (p.r < 5) {
            nowX = p.x + mouse.x / 8;
            nowY = p.y + mouse.y / 8;
        };
        if (p.r < 4) {
            nowX = p.x + mouse.x / 9.5;
            nowY = p.y + mouse.y / 9.5;
        };
        if (p.r < 3) {
            nowX = p.x + mouse.x / 11;
            nowY = p.y + mouse.y / 11;
        };
        if (p.r < 2) {
            nowX = p.x + mouse.x / 12.5;
            nowY = p.y + mouse.y / 12.5;
        };
        if (p.r < 1) {
            nowX = p.x + mouse.x / 15;
            nowY = p.y + mouse.y / 15;
        };

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(nowX, nowY, p.r, Math.PI * 2, false);
        ctx.fill();
    }
}

setInterval(draw, 33);

// SUBRAYADO MENU
var sobreMi = document.querySelector('.sobreMi');
var experiencia = document.querySelector('.experiencia');
var estudios = document.querySelector('.estudios');
var competencias = document.querySelector('.competencias');
var proyectos = document.querySelector('.proyectos');

sobreMi.addEventListener('click', function () {
    sobreMi.classList.add('magic--underline');
    experiencia.classList.remove('magic--underline');
    estudios.classList.remove('magic--underline');
    competencias.classList.remove('magic--underline');
    proyectos.classList.remove('magic--underline');
});
experiencia.addEventListener('click', function () {
    sobreMi.classList.remove('magic--underline');
    experiencia.classList.add('magic--underline');
    estudios.classList.remove('magic--underline');
    competencias.classList.remove('magic--underline');
    proyectos.classList.remove('magic--underline');
});
estudios.addEventListener('click', function () {
    sobreMi.classList.remove('magic--underline');
    experiencia.classList.remove('magic--underline');
    estudios.classList.add('magic--underline');
    competencias.classList.remove('magic--underline');
    proyectos.classList.remove('magic--underline');
});
competencias.addEventListener('click', function () {
    sobreMi.classList.remove('magic--underline');
    experiencia.classList.remove('magic--underline');
    estudios.classList.remove('magic--underline');
    competencias.classList.add('magic--underline');
    proyectos.classList.remove('magic--underline');
});
proyectos.addEventListener('click', function () {
    sobreMi.classList.remove('magic--underline');
    experiencia.classList.remove('magic--underline');
    estudios.classList.remove('magic--underline');
    competencias.classList.remove('magic--underline');
    proyectos.classList.add('magic--underline');
});

// CONTACTO
var containerContactForm = document.querySelector('.container__contactForm');
var estadoForm = 0;

function openContacto() {
    containerContactForm.classList.toggle('hide');
    containerContactForm.classList.toggle('form_animation');

    if (estadoForm == 0) {
        document.querySelector("body").style.overflow = "hidden";
        estadoForm = 1;
    } else {
        document.querySelector("body").style.overflow = "initial";
        estadoForm = 0;
    }
}

// COMPETENCIAS
const LiquidButton = class LiquidButton {
    constructor(svg) {
        const options = svg.dataset;
        this.id = this.constructor.id || (this.constructor.id = 1);
        this.constructor.id++;
        this.xmlns = 'http://www.w3.org/2000/svg';
        this.tension = options.tension * 1 || 0.4;
        this.width = options.width * 1 || 150;
        this.height = options.height * 1 || 150;
        this.margin = options.margin || 40;
        this.hoverFactor = options.hoverFactor || -0.1;
        this.gap = options.gap || 5;
        this.debug = options.debug || false;
        this.forceFactor = options.forceFactor || 0.2;
        this.color1 = options.color1 || '#36DFE7';
        this.color2 = options.color2 || '#8F17E1';
        this.color3 = options.color3 || '#BF09E6';
        this.textColor = options.textColor || '#FFFFFF';
        this.text = options.text || '';
        this.svg = svg;
        this.layers = [{
            points: [],
            viscosity: 0.5,
            mouseForce: 100,
            forceLimit: 2,
        }, {
            points: [],
            viscosity: 0.8,
            mouseForce: 150,
            forceLimit: 3,
        }];
        for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
            const layer = this.layers[layerIndex];
            layer.viscosity = options['layer-' + (layerIndex + 1) + 'Viscosity'] * 1 || layer.viscosity;
            layer.mouseForce = options['layer-' + (layerIndex + 1) + 'MouseForce'] * 1 || layer.mouseForce;
            layer.forceLimit = options['layer-' + (layerIndex + 1) + 'ForceLimit'] * 1 || layer.forceLimit;
            layer.path = document.createElementNS(this.xmlns, 'path');
            this.svg.appendChild(layer.path);
        }
        this.wrapperElement = options.wrapperElement || document.body;
        if (!this.svg.parentElement) {
            this.wrapperElement.append(this.svg);
        }

        this.svgText = document.createElementNS(this.xmlns, 'text');
        this.svgText.setAttribute('x', '50%');
        this.svgText.setAttribute('y', '50%');
        this.svgText.setAttribute('dy', ~~(this.height / 8) + 'px');
        this.svgText.setAttribute('text-anchor', 'middle');
        this.svgText.setAttribute('pointer-events', 'none');
        this.svg.appendChild(this.svgText);

        this.svgDefs = document.createElementNS(this.xmlns, 'defs')
        this.svg.appendChild(this.svgDefs);

        this.touches = [];
        this.noise = options.noise || 0;
        document.body.addEventListener('touchstart', this.touchHandler);
        document.body.addEventListener('touchmove', this.touchHandler);
        document.body.addEventListener('touchend', this.clearHandler);
        document.body.addEventListener('touchcancel', this.clearHandler);
        this.svg.addEventListener('mousemove', this.mouseHandler);
        this.svg.addEventListener('mouseout', this.clearHandler);
        this.initOrigins();
        this.animate();
    }

    get mouseHandler() {
        return (e) => {
            this.touches = [{
                x: e.offsetX,
                y: e.offsetY,
                force: 1,
            }];
        };
    }

    get touchHandler() {
        return (e) => {
            this.touches = [];
            const rect = this.svg.getBoundingClientRect();
            for (let touchIndex = 0; touchIndex < e.changedTouches.length; touchIndex++) {
                const touch = e.changedTouches[touchIndex];
                const x = touch.pageX - rect.left;
                const y = touch.pageY - rect.top;
                if (x > 0 && y > 0 && x < this.svgWidth && y < this.svgHeight) {
                    this.touches.push({ x, y, force: touch.force || 1 });
                }
            }
            e.preventDefault();
        };
    }

    get clearHandler() {
        return (e) => {
            this.touches = [];
        };
    }

    get raf() {
        return this.__raf || (this.__raf = (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback) { setTimeout(callback, 10) }
        ).bind(window));
    }

    distance(p1, p2) {
        return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    }

    update() {
        for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
            const layer = this.layers[layerIndex];
            const points = layer.points;
            for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
                const point = points[pointIndex];
                const dx = point.ox - point.x + (Math.random() - 0.5) * this.noise;
                const dy = point.oy - point.y + (Math.random() - 0.5) * this.noise;
                const d = Math.sqrt(dx * dx + dy * dy);
                const f = d * this.forceFactor;
                point.vx += f * ((dx / d) || 0);
                point.vy += f * ((dy / d) || 0);
                for (let touchIndex = 0; touchIndex < this.touches.length; touchIndex++) {
                    const touch = this.touches[touchIndex];
                    let mouseForce = layer.mouseForce;
                    if (
                        touch.x > this.margin &&
                        touch.x < this.margin + this.width &&
                        touch.y > this.margin &&
                        touch.y < this.margin + this.height
                    ) {
                        mouseForce *= -this.hoverFactor;
                    }
                    const mx = point.x - touch.x;
                    const my = point.y - touch.y;
                    const md = Math.sqrt(mx * mx + my * my);
                    const mf = Math.max(-layer.forceLimit, Math.min(layer.forceLimit, (mouseForce * touch.force) / md));
                    point.vx += mf * ((mx / md) || 0);
                    point.vy += mf * ((my / md) || 0);
                }
                point.vx *= layer.viscosity;
                point.vy *= layer.viscosity;
                point.x += point.vx;
                point.y += point.vy;
            }
            for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
                const prev = points[(pointIndex + points.length - 1) % points.length];
                const point = points[pointIndex];
                const next = points[(pointIndex + points.length + 1) % points.length];
                const dPrev = this.distance(point, prev);
                const dNext = this.distance(point, next);

                const line = {
                    x: next.x - prev.x,
                    y: next.y - prev.y,
                };
                const dLine = Math.sqrt(line.x * line.x + line.y * line.y);

                point.cPrev = {
                    x: point.x - (line.x / dLine) * dPrev * this.tension,
                    y: point.y - (line.y / dLine) * dPrev * this.tension,
                };
                point.cNext = {
                    x: point.x + (line.x / dLine) * dNext * this.tension,
                    y: point.y + (line.y / dLine) * dNext * this.tension,
                };
            }
        }
    }

    animate() {
        this.raf(() => {
            this.update();
            this.draw();
            this.animate();
        });
    }

    get svgWidth() {
        return this.width + this.margin * 2;
    }

    get svgHeight() {
        return this.height + this.margin * 2;
    }

    draw() {
        for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
            const layer = this.layers[layerIndex];
            if (layerIndex === 1) {
                if (this.touches.length > 0) {
                    while (this.svgDefs.firstChild) {
                        this.svgDefs.removeChild(this.svgDefs.firstChild);
                    }
                    for (let touchIndex = 0; touchIndex < this.touches.length; touchIndex++) {
                        const touch = this.touches[touchIndex];
                        const gradient = document.createElementNS(this.xmlns, 'radialGradient');
                        gradient.id = 'liquid-gradient-' + this.id + '-' + touchIndex;
                        const start = document.createElementNS(this.xmlns, 'stop');
                        start.setAttribute('stop-color', this.color3);
                        start.setAttribute('offset', '0%');
                        const stop = document.createElementNS(this.xmlns, 'stop');
                        stop.setAttribute('stop-color', this.color2);
                        stop.setAttribute('offset', '100%');
                        gradient.appendChild(start);
                        gradient.appendChild(stop);
                        this.svgDefs.appendChild(gradient);
                        gradient.setAttribute('cx', touch.x / this.svgWidth);
                        gradient.setAttribute('cy', touch.y / this.svgHeight);
                        gradient.setAttribute('r', touch.force);
                        layer.path.style.fill = 'url(#' + gradient.id + ')';
                    }
                } else {
                    layer.path.style.fill = this.color2;
                }
            } else {
                layer.path.style.fill = this.color1;
            }
            const points = layer.points;
            const commands = [];
            commands.push('M', points[0].x, points[0].y);
            for (let pointIndex = 1; pointIndex < points.length; pointIndex += 1) {
                commands.push('C',
                    points[(pointIndex + 0) % points.length].cNext.x,
                    points[(pointIndex + 0) % points.length].cNext.y,
                    points[(pointIndex + 1) % points.length].cPrev.x,
                    points[(pointIndex + 1) % points.length].cPrev.y,
                    points[(pointIndex + 1) % points.length].x,
                    points[(pointIndex + 1) % points.length].y
                );
            }
            commands.push('Z');
            layer.path.setAttribute('d', commands.join(' '));
        }
        this.svgText.textContent = this.text;
        this.svgText.style.fill = this.textColor;
    }

    createPoint(x, y) {
        return {
            x: x,
            y: y,
            ox: x,
            oy: y,
            vx: 0,
            vy: 0,
        };
    }

    initOrigins() {
        this.svg.setAttribute('width', this.svgWidth);
        this.svg.setAttribute('height', this.svgHeight);
        for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
            const layer = this.layers[layerIndex];
            const points = [];
            for (let x = ~~(this.height / 2); x < this.width - ~~(this.height / 2); x += this.gap) {
                points.push(this.createPoint(
                    x + this.margin,
                    this.margin
                ));
            }
            for (let alpha = ~~(this.height * 1.25); alpha >= 0; alpha -= this.gap) {
                const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
                points.push(this.createPoint(
                    Math.sin(angle) * this.height / 2 + this.margin + this.width - this.height / 2,
                    Math.cos(angle) * this.height / 2 + this.margin + this.height / 2
                ));
            }
            for (let x = this.width - ~~(this.height / 2) - 1; x >= ~~(this.height / 2); x -= this.gap) {
                points.push(this.createPoint(
                    x + this.margin,
                    this.margin + this.height
                ));
            }
            for (let alpha = 0; alpha <= ~~(this.height * 1.25); alpha += this.gap) {
                const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
                points.push(this.createPoint(
                    (this.height - Math.sin(angle) * this.height / 2) + this.margin - this.height / 2,
                    Math.cos(angle) * this.height / 2 + this.margin + this.height / 2
                ));
            }
            layer.points = points;
        }
    }
}


const redraw = () => {
    button.initOrigins();
};

const buttons = document.getElementsByClassName('liquid-button');
for (let buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {
    const button = buttons[buttonIndex];
    button.liquidButton = new LiquidButton(button);
}


// COMPETENCIAS CLICK
var comp_zbrush = document.querySelector('#comp_zbrush');
var comp_adobe = document.querySelector('#comp_adobe');
var comp_netfabb = document.querySelector('#comp_netfabb');
var comp_rhino = document.querySelector('#comp_rhino');
var comp_web = document.querySelector('#comp_web');
var comp_spine = document.querySelector('#comp_spine');
var comp_otros = document.querySelector('#comp_otros');
var comp_aptitudes = document.querySelector('#comp_aptitudes');
var comp_idiomas = document.querySelector('#comp_idiomas');
var comp_apart_zbrush = document.querySelector('.comp_apart-zbrush');
var comp_apart_adobe = document.querySelector('.comp_apart-adobe');
var comp_apart_netfabb = document.querySelector('.comp_apart-netfabb');
var comp_apart_rhino = document.querySelector('.comp_apart-rhino');
var comp_apart_web = document.querySelector('.comp_apart-web');
var comp_apart_spine = document.querySelector('.comp_apart-spine');
var comp_apart_otros = document.querySelector('.comp_apart-otros');
var comp_apart_aptitudes = document.querySelector('.comp_apart-aptitudes');
var comp_apart_idiomas = document.querySelector('.comp_apart-idiomas');

comp_zbrush.addEventListener('click', function () {
    comp_zbrush.classList.add('magic--underline');
    comp_adobe.classList.remove('magic--underline');
    comp_netfabb.classList.remove('magic--underline');
    comp_rhino.classList.remove('magic--underline');
    comp_web.classList.remove('magic--underline');
    comp_spine.classList.remove('magic--underline');
    comp_otros.classList.remove('magic--underline');
    comp_aptitudes.classList.remove('magic--underline');
    comp_idiomas.classList.remove('magic--underline');
    comp_apart_zbrush.classList.remove('hide');
    comp_apart_adobe.classList.add('hide');
    comp_apart_netfabb.classList.add('hide');
    comp_apart_rhino.classList.add('hide');
    comp_apart_web.classList.add('hide');
    comp_apart_spine.classList.add('hide');
    comp_apart_otros.classList.add('hide');
    comp_apart_aptitudes.classList.add('hide');
    comp_apart_idiomas.classList.add('hide');
});
comp_adobe.addEventListener('click', function () {
    comp_zbrush.classList.remove('magic--underline');
    comp_adobe.classList.add('magic--underline');
    comp_netfabb.classList.remove('magic--underline');
    comp_rhino.classList.remove('magic--underline');
    comp_web.classList.remove('magic--underline');
    comp_spine.classList.remove('magic--underline');
    comp_otros.classList.remove('magic--underline');
    comp_aptitudes.classList.remove('magic--underline');
    comp_idiomas.classList.remove('magic--underline');
    comp_apart_zbrush.classList.add('hide');
    comp_apart_adobe.classList.remove('hide');
    comp_apart_netfabb.classList.add('hide');
    comp_apart_rhino.classList.add('hide');
    comp_apart_web.classList.add('hide');
    comp_apart_spine.classList.add('hide');
    comp_apart_otros.classList.add('hide');
    comp_apart_aptitudes.classList.add('hide');
    comp_apart_idiomas.classList.add('hide');
});
comp_netfabb.addEventListener('click', function () {
    comp_zbrush.classList.remove('magic--underline');
    comp_adobe.classList.remove('magic--underline');
    comp_netfabb.classList.add('magic--underline');
    comp_rhino.classList.remove('magic--underline');
    comp_web.classList.remove('magic--underline');
    comp_spine.classList.remove('magic--underline');
    comp_otros.classList.remove('magic--underline');
    comp_aptitudes.classList.remove('magic--underline');
    comp_idiomas.classList.remove('magic--underline');
    comp_apart_zbrush.classList.add('hide');
    comp_apart_adobe.classList.add('hide');
    comp_apart_netfabb.classList.remove('hide');
    comp_apart_rhino.classList.add('hide');
    comp_apart_web.classList.add('hide');
    comp_apart_spine.classList.add('hide');
    comp_apart_otros.classList.add('hide');
    comp_apart_aptitudes.classList.add('hide');
    comp_apart_idiomas.classList.add('hide');
});
comp_rhino.addEventListener('click', function () {
    comp_zbrush.classList.remove('magic--underline');
    comp_adobe.classList.remove('magic--underline');
    comp_netfabb.classList.remove('magic--underline');
    comp_rhino.classList.add('magic--underline');
    comp_web.classList.remove('magic--underline');
    comp_spine.classList.remove('magic--underline');
    comp_otros.classList.remove('magic--underline');
    comp_aptitudes.classList.remove('magic--underline');
    comp_idiomas.classList.remove('magic--underline');
    comp_apart_zbrush.classList.add('hide');
    comp_apart_adobe.classList.add('hide');
    comp_apart_netfabb.classList.add('hide');
    comp_apart_rhino.classList.remove('hide');
    comp_apart_web.classList.add('hide');
    comp_apart_spine.classList.add('hide');
    comp_apart_otros.classList.add('hide');
    comp_apart_aptitudes.classList.add('hide');
    comp_apart_idiomas.classList.add('hide');
});
comp_web.addEventListener('click', function () {
    comp_zbrush.classList.remove('magic--underline');
    comp_adobe.classList.remove('magic--underline');
    comp_netfabb.classList.remove('magic--underline');
    comp_rhino.classList.remove('magic--underline');
    comp_web.classList.add('magic--underline');
    comp_spine.classList.remove('magic--underline');
    comp_otros.classList.remove('magic--underline');
    comp_aptitudes.classList.remove('magic--underline');
    comp_idiomas.classList.remove('magic--underline');
    comp_apart_zbrush.classList.add('hide');
    comp_apart_adobe.classList.add('hide');
    comp_apart_netfabb.classList.add('hide');
    comp_apart_rhino.classList.add('hide');
    comp_apart_web.classList.remove('hide');
    comp_apart_spine.classList.add('hide');
    comp_apart_otros.classList.add('hide');
    comp_apart_aptitudes.classList.add('hide');
    comp_apart_idiomas.classList.add('hide');
});
comp_spine.addEventListener('click', function () {
    comp_zbrush.classList.remove('magic--underline');
    comp_adobe.classList.remove('magic--underline');
    comp_netfabb.classList.remove('magic--underline');
    comp_rhino.classList.remove('magic--underline');
    comp_web.classList.remove('magic--underline');
    comp_spine.classList.add('magic--underline');
    comp_otros.classList.remove('magic--underline');
    comp_aptitudes.classList.remove('magic--underline');
    comp_idiomas.classList.remove('magic--underline');
    comp_apart_zbrush.classList.add('hide');
    comp_apart_adobe.classList.add('hide');
    comp_apart_netfabb.classList.add('hide');
    comp_apart_rhino.classList.add('hide');
    comp_apart_web.classList.add('hide');
    comp_apart_spine.classList.remove('hide');
    comp_apart_otros.classList.add('hide');
    comp_apart_aptitudes.classList.add('hide');
    comp_apart_idiomas.classList.add('hide');
});
comp_otros.addEventListener('click', function () {
    comp_zbrush.classList.remove('magic--underline');
    comp_adobe.classList.remove('magic--underline');
    comp_netfabb.classList.remove('magic--underline');
    comp_rhino.classList.remove('magic--underline');
    comp_web.classList.remove('magic--underline');
    comp_spine.classList.remove('magic--underline');
    comp_otros.classList.add('magic--underline');
    comp_aptitudes.classList.remove('magic--underline');
    comp_idiomas.classList.remove('magic--underline');
    comp_apart_zbrush.classList.add('hide');
    comp_apart_adobe.classList.add('hide');
    comp_apart_netfabb.classList.add('hide');
    comp_apart_rhino.classList.add('hide');
    comp_apart_web.classList.add('hide');
    comp_apart_spine.classList.add('hide');
    comp_apart_otros.classList.remove('hide');
    comp_apart_aptitudes.classList.add('hide');
    comp_apart_idiomas.classList.add('hide');
});
comp_aptitudes.addEventListener('click', function () {
    comp_zbrush.classList.remove('magic--underline');
    comp_adobe.classList.remove('magic--underline');
    comp_netfabb.classList.remove('magic--underline');
    comp_rhino.classList.remove('magic--underline');
    comp_web.classList.remove('magic--underline');
    comp_spine.classList.remove('magic--underline');
    comp_otros.classList.remove('magic--underline');
    comp_aptitudes.classList.add('magic--underline');
    comp_idiomas.classList.remove('magic--underline');
    comp_apart_zbrush.classList.add('hide');
    comp_apart_adobe.classList.add('hide');
    comp_apart_netfabb.classList.add('hide');
    comp_apart_rhino.classList.add('hide');
    comp_apart_web.classList.add('hide');
    comp_apart_spine.classList.add('hide');
    comp_apart_otros.classList.add('hide');
    comp_apart_aptitudes.classList.remove('hide');
    comp_apart_idiomas.classList.add('hide');
});
comp_idiomas.addEventListener('click', function () {
    comp_zbrush.classList.remove('magic--underline');
    comp_adobe.classList.remove('magic--underline');
    comp_netfabb.classList.remove('magic--underline');
    comp_rhino.classList.remove('magic--underline');
    comp_web.classList.remove('magic--underline');
    comp_spine.classList.remove('magic--underline');
    comp_otros.classList.remove('magic--underline');
    comp_aptitudes.classList.remove('magic--underline');
    comp_idiomas.classList.add('magic--underline');
    comp_apart_zbrush.classList.add('hide');
    comp_apart_adobe.classList.add('hide');
    comp_apart_netfabb.classList.add('hide');
    comp_apart_rhino.classList.add('hide');
    comp_apart_web.classList.add('hide');
    comp_apart_spine.classList.add('hide');
    comp_apart_otros.classList.add('hide');
    comp_apart_aptitudes.classList.add('hide');
    comp_apart_idiomas.classList.remove('hide');
});